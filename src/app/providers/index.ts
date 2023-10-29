import { compose } from 'ramda'

import { withMantine } from './withMantine'
import { withRouter } from './withRouter'

export const withProviders = compose(withMantine, withRouter)
