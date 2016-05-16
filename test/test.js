const fs = require('fs');
const expect = require('chai').expect;
const script = require('../transform');

describe('Different images', () => {
  it('The first image shoudl be different than the second image', () => {
    expect(fs.readFileSync('img/palette-bitmap.bmp')).to.not.eql(fs.readFileSync('img/new-palette-bitmap.bmp'));
  });
});
