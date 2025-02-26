import PropTypes from 'prop-types'

import ProgressBarCircle from './ProgressBarCircle/index.js'
import ProgressBarLine from './ProgressBarLine/index.js'
import {SIZES, STATUS, TYPES} from './settings.js'

const AtomProgressBar = ({type, size, ...props}) => {
  switch (type) {
    case TYPES.CIRCLE:
      return <ProgressBarCircle size={size} {...props} />
    case TYPES.LINE:
    case TYPES.LINE_DOUBLE_BAR:
    default:
      return <ProgressBarLine size={size} {...props} />
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

AtomProgressBar.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  status: PropTypes.oneOf(Object.values(STATUS))
}

AtomProgressBar.defaultProps = {
  type: TYPES.LINE,
  status: STATUS.PROGRESS
}

export default AtomProgressBar
export {
  TYPES as atomProgressBarTypes,
  SIZES as atomProgressBarSizes,
  STATUS as atomProgressBarStatus
}
