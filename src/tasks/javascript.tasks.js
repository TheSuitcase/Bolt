import Bolt from '../main'
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
Bolt.task('javascript:build', (bolt, paths, state) => {
  let stream = bolt.src(Path.join(paths.input, paths.styles.input) + '/**/*.js')
  let taskState = state.styles[state.mode]

  stream = stream.pipe(bolt.dest(Path.join(paths.output, paths.styles.output)))

  return stream
})
