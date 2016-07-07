#!/usr/bin/env node
import Bolt from '../index'
import Pyramid from 'thesuitcase-pyramid'
import Commander from 'commander'
import Package from '../../package.json'
import Chalk from 'chalk'

// Load the bolt file.
require(process.env.PWD + '/bolt.js')

let instances = Object.keys(Bolt.instances)

// General setup.
Pyramid
  .version(Package.version)

Pyramid
  .command('run')
  .required('instance', 'The name of your Bolt instance.')
  .optional('task', 'The name of the task you want to run.')

  .option(['-n', '--new'] , 'Create a new Bolt process!')

  // Features.
  // .password()
  // .checkbox('Pick a process', ['option 1', 'option 2'])
  // .list('Pick a process', ['option 1', 'option 2'])
  .confirm('Are you sure?')
  .input('Enter your username: ')

  .action((cli, feature, answer) => {
    if (feature.type === 'confirm') {
      cli.checkbox('Pick a process', ['option 1', 'option 2'])
      Pyramid.log("We don't like your answer!")
    }
  // console.log('Action:', args); // , feature.type, answer)
  })

Pyramid
  .delimiter([
    Chalk.gray('['),
    Chalk.yellow('Bolt'),
    Chalk.gray(']')
  ].join(''))

Pyramid
  // .overflow((args) => {
  //   console.log('I catched your request: ', args)
  // })
  .parse()

  // Object based command.
  // Pyramid
  //   .command('run', {
  //     required: [
  //       {instance: 'The name of your Bolt instance'}
  //     ],
  //     optional: {
  //       task: 'The name of you Bolt instance.'
  //     },
  //     options: {
  //       '-n --new', 'Create a new Bolt process'
  //     },
  //   })
