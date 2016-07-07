import Gulp from 'gulp'
import Main from '../main'
import State from './default-state'
import Paths from './default-paths'

let instances = {}

class Bolt extends Gulp.Gulp {
  constructor (name, paths = {} , state = {}) {
    super()

    this.name = name
    this.state = Object.assign({}, State, state)
    this.paths = Object.assign({}, Paths, paths)

    Main.registerInstance(this)

    this.setTasks()
  }
  setTasks () {
    let all = Object.keys(Main.defaultTasks)

    this.tasks = Object.assign({}, Main.defaultTasks)

    // Update scopes to this instance.
    all.forEach((task) => {
      this.tasks[task].fn = Main.defaultTasks[task].fn.bind(null, this, this.paths, this.state)
    })

    this.task('default', this.state[this.state.mode])
  }

  run (task) {
    if (task === 'default' || task === undefined) {
      this.start()
    } else {
      this.task(task)
    }
  }

}

export default Bolt
