#!/usr/bin/env node

/*
Aqui ponemos comentarios
*/
const ins = require("util").inspect;
const deb = (...args) => {
  console.log(ins(...args, { depth: null }));
};

const fs = require("fs");
const shell = require('shelljs');
const { program } = require('commander');
const { args } = program;
const { version } = require("./package.json")

program
  .version(version)
  .option('-r, --repo <reponame>', 'specifies the repo')
  .option('-o, --org <organization>', 'specifies the organization')

program.parse(process.argv);

let {org , repo } = program.opts();

if (repo) console.log(`repo = ${repo}`);
if (org) console.log(`org = ${org}`);
console.log(`program.args = ${program.args}`)
console.log("It is working")

// comprobar que git y gh están instalados
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.which('gh')) {
  shell.echo('Sorry, this script requires gh cli');
  shell.exit(1);
}

let newName;
if (!org) {
  [org, repo] = args[0].split("/");
  console.log(`org and repo ${org} ${repo}`);
  newName = args[1]
  console.log(`newName = ${newName}`)
}
if(!newName) newName = args[0]
if(!org || !repo || !newName) program.help()
