import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (firstWord, secondWord) => {
	firstWord = firstWord.replace(/ /g, '').toLowerCase();
	secondWord = secondWord.replace(/ /g, '').toLowerCase();

	if (firstWord.length !== secondWord.length) {
		return false;
	}

	if (firstWord === secondWord) {
		return true;
	}	

	const firstWordLetterCount = getLetterCount(firstWord);
	const secondWordLetterCount = getLetterCount(secondWord);

	// console.log(firstWordLetterCount, secondWordLetterCount);
	return isEqual(firstWordLetterCount, secondWordLetterCount);
}
