const anagrams = require('../523a86aa4230ebb5420001e1');

describe('anagrams ::', () => {
    it('test anagrams', () => {
        expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual([
            'aabb',
            'bbaa',
        ]);
    });

    it('test anagrams', () => {
        expect(
            anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
        ).toEqual(['carer', 'racer']);
    });

    it('test anagrams', () => {
        expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([]);
    });
});
