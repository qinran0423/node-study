#!/usr/bin/env node
const program = require('commander')

program.version(require('../package.json').version)

// ran init abc

program.command('init <name>')
  .description('init project')
  .action(require('../lib/init'))

program.parse(process.argv)