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

//let args = program.args;
const options = program.opts();

if (options.repo) console.log(options.repo);
if (options.org) console.log(options.org);

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
  console.log(`newName = ${newName}`)
}
if(!newName) newName = args[0]
if(!org || !repo || newName) program.help()

/*
if (!repo) {
  [org, repo] = args[1].split("/")
}

if ( args.length < 1) program.help();
if (!org || !repo) {
  program.help();
}
else if (args.length === 0) {
  program.help();
}
console.log('The number of arguments is correct')
*/