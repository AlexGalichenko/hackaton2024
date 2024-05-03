import { execSync } from 'node:child_process';

export function getChangedFiles(targetBranch: string) {
    return execSync(`git --no-pager diff ':(exclude)package-lock.json'`)
        .toString()
}

console.log(getChangedFiles('main'))
