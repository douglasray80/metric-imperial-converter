/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai')
const assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

const convertHandler = new ConvertHandler()

suite('Unit Tests', function() {
	suite('Function convertHandler.getNum(input)', function() {
		test('Whole number input', function(done) {
			const input = '32L'
			assert.equal(convertHandler.getNum(input), 32)
			done()
		})

		test('Decimal Input', function(done) {
			const input = '32.5L'
			assert.equal(convertHandler.getNum(input), 32.5)
			done()
		})

		test('Fractional Input', function(done) {
			const input = '1/4kg'
			assert.equal(convertHandler.getNum(input), 0.25)
			done()
		})

		test('Fractional Input w/ Decimal', function(done) {
			const input = '1.5/2.5kg'
			assert.equal(convertHandler.getNum(input), 0.6)
			done()
		})

		test('Invalid Input (double fraction)', function(done) {
			const input = '1/2/4gg'
			assert.equal(convertHandler.getNum(input), 'invalid number')
			done()
		})

		test('No Numerical Input', function(done) {
			assert.equal(convertHandler.getNum('L'), 1)
			assert.equal(convertHandler.getNum('kg'), 1)
			assert.equal(convertHandler.getNum('mi'), 1)
			done()
		})
	})

	suite('Function convertHandler.getUnit(input)', function() {
		test('For Each Valid Unit Inputs', function(done) {
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
			units.forEach(function(ele) {
				assert.equal(convertHandler.getUnit(`14${ele}`), ele)
				assert.equal(convertHandler.getUnit(`2/5${ele}`), ele)
			})
			done()
		})

		test('Unknown Unit Input', function(done) {
			assert.equal(convertHandler.getUnit('24xf'), 'invalid unit')
			assert.equal(convertHandler.getUnit('1/4zg'), 'invalid unit')
			done()
		})
	})

	suite('Function convertHandler.getReturnUnit(initUnit)', function() {
		test('For Each Valid Unit Inputs', function(done) {
			const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
			const expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs']
			input.forEach(function(ele, i) {
				assert.equal(convertHandler.getReturnUnit(ele), expect[i])
			})
			done()
		})
	})

	suite('Function convertHandler.spellOutUnit(unit)', function() {
		test('For Each Valid Unit Inputs', function(done) {
			const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
			const expect = [
				'gallons',
				'litres',
				'miles',
				'kilometres',
				'pounds',
				'kilograms'
			]
			input.forEach(function(ele, i) {
				assert.equal(convertHandler.spellOutUnit(ele), expect[i])
			})
			done()
		})
	})

	suite('Function convertHandler.convert(num, unit)', function() {
		test('Gal to L', function(done) {
			var input = [5, 'gal']
			var expected = 18.9271
			assert.approximately(
				convertHandler.convert(input[0], input[1]),
				expected,
				0.1
			) //0.1 tolerance
			done()
		})

		test('L to Gal', function(done) {
			//done();
		})

		test('Mi to Km', function(done) {
			//done();
		})

		test('Km to Mi', function(done) {
			//done();
		})

		test('Lbs to Kg', function(done) {
			//done();
		})

		test('Kg to Lbs', function(done) {
			//done();
		})
	})
})
