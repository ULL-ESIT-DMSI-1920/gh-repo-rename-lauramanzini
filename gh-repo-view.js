#! librerias que son muy util
const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs'); 
const { program } = require('commander');

program
  .version('0.1.1')
  .option('-r, --repo <type>', 'output extra debugging')
  .option('-o, --org <type>', 'small pizza size')
 

program.parse(process.argv);

const options = program.opts();
if (options.repo) console.log(options.repo);

if (options.org) console.log(options.org);

console.log("It is working")


