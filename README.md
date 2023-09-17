# Typescript starter CLI

Typescript starter script to set up a new project.
Run on Node v18.16.1

It will: 

1. Initialize a new git repository
2. Initialize a new npm project
3. Install typescript
4. Create tsconfig.json file
5. Create README.md file

## Making it global

Use symlink to make it global `npm link`

## Usage
Use `tsstarter` command to run the script, following the bin name in package.json

## Notes
If this script is moved, renamed or deleted, the symlink will be broken. To fix it, run `npm link` again.