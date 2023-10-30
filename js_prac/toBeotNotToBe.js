/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    return {
        toBe: function(otherval) {
            if (otherval === val) {
                console.log(true)
            } else { throw new Error("Not Equal") }
        },

        notToBe: function(otherval) {
            if (otherval !== val) {
                console.log(true)
            } else { throw new Error("Equal") }
        }
    }


}

try {
    const result = expect(5).toBe(5)
    console.log(result);

} catch (error) { console.error(error.message) }