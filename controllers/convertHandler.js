/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
	this.getNum = function(input) {
		let result
		const numRegex = /\d*\.?\d*\/?\d*\.?\d*/
		const dblFractionRegex = /\d*\.?\d*\/\d*\.?\d*\/\d*/
		const unitsOnlyRegex = /^\D$/g
		if (input.match(unitsOnlyRegex)) {
			return 1
		} else if (input.match(numRegex) && input.match(dblFractionRegex)) {
			return 'Invalid Number'
		} else if (input.match(numRegex)) {
			result = input.match(numRegex)[0]
			return eval(result)
		}
	}

	this.getUnit = function(input) {
		var result

		return result
	}

	this.getReturnUnit = function(initUnit) {
		var result

		return result
	}

	this.spellOutUnit = function(unit) {
		var result

		return result
	}

	this.convert = function(initNum, initUnit) {
		const galToL = 3.78541
		const lbsToKg = 0.453592
		const miToKm = 1.60934
		var result

		return result
	}

	this.getString = function(initNum, initUnit, returnNum, returnUnit) {
		var result

		return result
	}
}

module.exports = ConvertHandler
