import Gulp from 'gulp'
import State from './state'
import Paths from './paths'

let tasks = {}

var setTask = (name, dep, fn) => {
  if (typeof name === 'object') {
    Object.keys(name).forEach((item) => {
      setTask(item, [], name[item])
    })
    return
  }

  if (typeof dep === 'function') {
    fn = dep
    dep = []
  }

  tasks[name] = {
  fn, dep, name}
}

class Bolt extends Gulp.Gulp {
  static task (...args) {
    setTask.apply(null, args)
  }
  task (...args) {
    super.task.apply(this, args)
  }

  constructor (paths = {} , state = {}) {
    super()

    this.state = Object.assign({}, State, state)
    this.paths = Object.assign({}, Paths, paths)

    this.setTasks()

    this.run()
  }
  setTasks () {
    let all = Object.keys(tasks)

    this.tasks = Object.assign({}, tasks)

    // Update scopes to this instance.
    all.forEach((task) => {
      this.tasks[task].fn = tasks[task].fn.bind(null, this, this.paths, this.state)
    })
  }

  run () {
    this.task('default', this.state[this.state.mode])
    this.start()
  }

}

export default Bolt
