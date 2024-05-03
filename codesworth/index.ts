import 'dotenv/config';
import { execSync } from 'node:child_process';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const prompt = `
Act as a senior developer. 
Explain code change from the provided git diff on the following JavaScript patch and perform a code review,
providing detailed feedback on its structure, efficiency, readability, and adherence to best practices. 
Consider aspects such as variable naming, function design, error handling, and overall code organization. 
Identify potential bugs, how changes may affect other code, and opportunities for optimization. 
Your review should aim to enhance the code's quality, maintainability, and scalability. 
Provide recommendations to human code reviewers.

Diff:

`
export function getChangedFiles(targetBranch: string) {
    execSync(`git fetch`);
    return execSync(`git --no-pager diff ${targetBranch} ':(exclude)package-lock.json'`)
        .toString()
}

async function main() {
    const gitDiff = getChangedFiles('origin/main');
    const codeReviewPrompt = `${prompt}${gitDiff}`;
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: codeReviewPrompt }],
        model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion);
    console.log(chatCompletion.choices[0]);
}

console.log(getChangedFiles('origin/main'))

main();
