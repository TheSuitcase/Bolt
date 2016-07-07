let Main = {
  instances: {},
  defaultTasks: {},

  task(name, dep, fn) {
    if (typeof name === 'object') {
      Object.keys(name).forEach((item) => {
        Main.task(item, [], name[item])
      })
      return
    }

    if (typeof dep === 'function') {
      fn = dep
      dep = []
    }

    Main.defaultTasks[name] = {
    fn, dep, name}
  },

  run(instance, task) {
    if (!Main.instances[instance]) { return false; }
    return Main.instances.task(task)
  },

  registerInstance(instance) {
    this.instances[instance.name] = instance
  }

}

export default Main
