import Main from './main'
import Instance from './instance'

import Default from './tasks/default.tasks'
import Styles from './tasks/styles.tasks'
import Javascript from './tasks/javascript.tasks'

let Bolt = Object.assign(Instance, Main)

export default Bolt
module.exports = Bolt
