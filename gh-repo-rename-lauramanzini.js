#!/usr/bin/env node

/*
Aqui ponemos comentarios
*/
const ins = require("util").inspect;

// const fs = require("fs"); no estamos utilizando este package
const shell = require('shelljs');
const { program } = require('commander');
const { args } = program;

const { version } = require("./package.json")

program
  .version(version)
  .option('-r, --repo <reponame>', 'repo')
  .option('-o, --org <organization>', 'organization')
  .option('-n, --name <name>', 'name')

program.parse(process.argv);

let originalName = program.opts().name

let {org , repo, name } = program.opts(); // de esta manera estoy creando ALIAS 

if(!org || !repo || !name) program.help()

if (repo) console.log(`repo = ${repo}`);
if (org) console.log(`org = ${org}`);
if (name) console.log(`program.args = ${name}`)

// comprobar que git y gh están instalados
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.which('gh')) {
  shell.echo('Sorry, this script requires gh cli');
  shell.exit(1);
}

// execute command 
let r = shell.exec(`gh api -X PATCH "/repos/${org}/${repo}" -f name=${newName}`, {silent: true})

r = JSON.parse(r.stdout)

console.log(`The repo has been renamed to ${r.full_name}`)



