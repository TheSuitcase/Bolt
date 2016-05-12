import Bolt from './bolt'
import State from './state'
import Fs from 'fs-extra'

// Set state modes.
let tasks = {
  'state:setmode:development': (bolt, paths, state) => {
    state.mode = 'development'
  },

  'state:setmode:production': (bolt, paths, state) => {
    state.mode = 'production'
  },

  // Empty the output directory.
  'clean:dist': (bolt, paths, state) => {
    if (paths.input === paths.output) { return; }
    Fs.emptyDirSync(paths.output)
  }
}

Bolt.task(tasks)
