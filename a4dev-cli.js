#!/usr/bin/env node

// console concerns
var program = require('commander');
var chalk = require('chalk');
var prompt = require('prompt');

// files handeling
var fs = require('fs');
var path = require('path');
var iniparser = require('iniparser');

// prompt configuration
prompt.message = "a4dev:".rainbow;
prompt.delimiter = ">>".green;

// display banner text
fs.readFileSync('banner.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.blue(data));
});

// program options
program
  .version('0.0.1')
  .option('-a, --alienhome', 'Parent path to èparent alien project')
  .parse(process.argv);

// Start the prompt
prompt.start();

prompt.get(['alienpath'], function(err, result) {

  // console.log(chalk.blue('Enter the alien path'));
  // if (result.alienpath === 'quit') {
  //   exit = true;
  // }
  //

  // write in file
  fs.appendFile('a4d.cfg', 'alienPath=' + result.alienpath + '\n', function(err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

  iniparser.parse('a4d.cfg', function(err, data) {
    var path = data.alienPath;
    console.log('PATH ALIEN >', path);
  });

  var config = iniparser.parseString('foo=bar');

  console.log('CONFIG >', config);

});

// fs.writeFile('a4d.cfg', 'abc', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });
