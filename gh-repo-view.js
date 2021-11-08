#! librerias que son muy util
const ins = require("util").inspect;
const deb = (...args) => { 
    if (debug) console.log(ins(...args, {depth: null})); 
};

const fs = require("fs");
const shell = require('shelljs'); 
const { Command } = require('commander');
program.version('0.0.1');

program
  .option('-r, --repo <type>', 'output extra debugging')
  .option('-o, --org <type>', 'small pizza size')
  .option('--help', 'help for more informations')
  .option('-V', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

console.log("It is working")


