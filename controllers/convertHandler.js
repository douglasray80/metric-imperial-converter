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
		const unitsOnlyRegex = /^\D+$/g
		if (input.match(unitsOnlyRegex)) {
			return 1
		} else if (input.match(numRegex) && input.match(dblFractionRegex)) {
			return 'invalid number'
		} else if (input.match(numRegex)) {
			result = input.match(numRegex)[0]
			return eval(result)
		}
	}

	this.getUnit = function(input) {
		const units = [
			'gal',
			'l',
			'mi',
			'km',
			'lbs',
			'kg',
			'GAL',
			'L',
			'MI',
			'KM',
			'LBS',
			'KG'
		]
		const regex = /[a-zA-Z]+$/gi
		const result = input.match(regex)
		const unit = result[0]
		if (!units.includes(unit)) {
			return 'invalid unit'
		} else {
			return unit
		}
	}

	this.getReturnUnit = function(initUnit) {
		const input = initUnit.toLowerCase()
		switch (input) {
			case 'gal':
				return 'l'
				break
			case 'l':
				return 'gal'
				break
			case 'mi':
				return 'km'
				break
			case 'km':
				return 'mi'
				break
			case 'lbs':
				return 'kg'
				break
			case 'kg':
				return 'lbs'
				break
			default:
				return 'invalid unit'
		}
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
