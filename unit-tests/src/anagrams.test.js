import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {

	it('return false when passed two words who are not anagrams', () => {
		const expected = false;
		const actual = isAnagram('listen', 'listens');

		expect(actual).to.be.equal(expected);
	})

	it('return true when passed the same two words', () => {
		const expected = true;
		const actual = isAnagram('state', 'state');

		expect(actual).to.be.equal(expected);
	})

	it('return false when passed two words with different length', () => {
		const expected = false;
		const actual = isAnagram('state', 'javascript');

		expect(actual).to.be.equal(expected);
	})

	it('return true when passed two words who are anagrams', () => {
		const expected = true;
		const actual = isAnagram('listen', 'silent');

		expect(actual).to.be.equal(expected);
	})

	it('return true when passed two words with spaces who are anagrams', () => {
		const expected = true;
		const actual = isAnagram('debit card', '   bad   credit');

		expect(actual).to.be.equal(expected);
	})

	it('return true when passed two words with different CASES who are anagrams', () => {
		const expected = true;
		const actual = isAnagram('debit card', 'BAD credit');

		expect(actual).to.be.equal(expected);
	})
})