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
  .option('-r, --repo <type>', 'output extra debugging')
  .option('-o, --org <type>', 'small pizza size')

program.parse(`process.argv = ${process.argv}`);

const options = program.opts();


if (options.repo) console.log(options.repo);
if (options.org) console.log(options.org);

console.log(`program.args = ${deb(args)}`)
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
