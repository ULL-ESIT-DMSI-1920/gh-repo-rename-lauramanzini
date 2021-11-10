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

const {org, repo }  = options;
if (!org || !repo) {
  if (args.length < 2) program.help()
}
if (org && repo && args.length < 1)  program.help();
