import Bolt from './bolt'
import State from './state'
import Path from 'path'

// Styles.
import Sass from 'gulp-sass'
import Minify from 'gulp-cssnano'
import Flatten from 'gulp-flatten'
import Rename from 'gulp-rename'
import Prefix from 'gulp-autoprefixer'
import Header from 'gulp-header'

// Load package
let Package = require(process.env.PWD + '/package.json')

// Empty the output directory.
Bolt.task('styles:build', (bolt, paths, state) => {
  let stream = bolt.src(Path.join(paths.input, paths.styles.input) + '/**/*.scss')
  let taskState = state.styles[state.mode]

  if (taskState.sass) {
    stream = stream.pipe(Sass(taskState.sass))
  }

  if (taskState.flatten) {
    stream = stream.pipe(Flatten())
  }

  if (taskState.prexif) {
    stream = stream.prefix(Prefix(taskState.prefix))
  }

  if (taskState.header) {
    stream = stream.pipe(Header(state.headers.full, {package: Package}))
  }

  stream = stream.pipe(bolt.dest(Path.join(paths.output, paths.styles.output)))

  if (!taskState.minify) { return stream; }

  stream = stream.pipe(Minify(taskState.minify))
  stream = stream.pipe(Rename({suffix: '.min'}))

  stream = stream.pipe(bolt.dest(Path.join(paths.output, paths.styles.output)))

  return stream
})
