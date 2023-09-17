#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function setupTypeScriptProject() {
    try {
        console.log('Setting up TypeScript project...');

        await exec('git init');
        console.log('Git repository initialized');

        await exec('npm init -y');
        console.log('NPM project initialized');

        await exec('npm i -D typescript');
        console.log('TypeScript installed');

        await exec('npx tsc --init');
        console.log('tsconfig.json created');

        await exec('touch README.md');
        console.log('README.md created');

        console.log('TypeScript project setup complete!');
    } catch (error) {
        console.log(error);
    }
}

setupTypeScriptProject();