/**
 *
 * Long press on an element using finger motion events. This command works only in a
 * mobile context.
 *
 * @alias browser.hold
 * @param {String} selector element to hold on
 * @uses protocol/element, protocol/touchLongClick
 * @type mobile
 *
 */

import { CommandError, RuntimeError } from '../utils/ErrorHandler'

let hold = function (selector) {
    /*!
     * compatibility check
     */
    if (!this.isMobile) {
        throw new CommandError('hold command is only supported for mobile platforms')
    }

    return this.element(selector).then((res) => {
        /**
         * check if element was found and throw error if not
         */
        if (!res.value) {
            throw new RuntimeError(7)
        }

        return this.touchLongClick(res.value.ELEMENT)
    })
}

export default hold
