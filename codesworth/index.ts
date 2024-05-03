import 'dotenv/config';
import {execSync} from 'node:child_process';
import {existsSync, readFileSync} from 'node:fs';
import OpenAI from 'openai';
import {Octokit} from '@octokit/rest';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const octokit = new Octokit({auth: process.env.GH_PAT});

const prompt = `
Act as a senior developer. 
Explain code change from the provided git diff on the following JavaScript patch and perform a code review,
providing detailed feedback on its structure, efficiency, readability, and adherence to best practices. 
Consider aspects such as variable naming, function design, error handling, and overall code organization. 
Identify potential bugs, how changes may affect other code, and opportunities for optimization. 
Your review should aim to enhance the code's quality, maintainability, and scalability. 
Provide recommendations to human code reviewers. Depending on presence or absence of critical issues provide your review status one of "approved" or "changes requested".
`

function getChangedFiles(targetBranch: string) {
  execSync(`git fetch`);
  return execSync(`git --no-pager diff ${targetBranch} ':(exclude)package-lock.json'`)
    .toString()
}

function getAdditionalInfo() {
  const path = 'codesworth.txt';
  return existsSync(path) ? readFileSync(path, 'utf-8') : '';
}

async function addPrComment(body: string) {
  await octokit.issues.createComment({
    owner: 'AlexGalichenko',
    repo: 'hackaton2024',
    issue_number: Number((process.env.GITHUB_REF as string).match(/\d+/)),
    body,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

async function main() {
  const gitDiff = getChangedFiles('origin/main');
  const additionalInfo = getAdditionalInfo();
  const codeReviewPrompt = `${prompt}\n:Additional Info:\n${additionalInfo}\nDiff:\n${gitDiff}`;
  const chatCompletion = await openai.chat.completions.create({
    messages: [{role: 'user', content: codeReviewPrompt}],
    model: 'gpt-4-turbo',
  });
  const commentBody = chatCompletion.choices[0].message.content;
  await addPrComment(commentBody as string);
  if (commentBody.toLowerCase().includes('changes requested')) process.exit(1)
}

main();
