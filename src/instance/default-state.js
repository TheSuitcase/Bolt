let State = {
  mode: 'production',

  // Run sequences.
  production: [
    'state:setmode:production',
    'clean:dist',
    'styles:build',
    'javascript:build'
  ],

  development: [
    'state:setmode:development',
    'clean:dist'
  ],

  headers: {
    full: '/*!\n' +
      ' * <%= package.name %> v<%= package.version %>: <%= package.description %>\n' +
      ' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
      ' * MIT License\n' +
      ' * <%= package.repository.url %>\n' +
      ' */\n\n',
    min: '/*!' +
      ' <%= package.name %> v<%= package.version %>' +
      ' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
      ' | MIT License' +
      ' | <%= package.repository.url %>' +
      ' */\n'
  },

  // Task settings.
  styles: {
    default: {
      sass: {
        outputStyle: 'expanded',
        sourceComments: true
      },
      minify: {
        discardComments: {
          removeAll: true
        }
      },
      flatten: true,
      prefix: {
        browsers: ['last 2 version', '> 1%'],
        cascade: true,
        remove: true
      },
      header: true,
    },
    production: {
      rename: false,
    },
    development: {
      minify: false
    }
  },

}

// Extend production and development settings.
let extend = ['styles']

extend.forEach((path) => {
  State[path].production = Object.assign({}, State[path].default, State[path].production)
  State[path].development = Object.assign({}, State[path].default, State[path].development)
})

export default State
