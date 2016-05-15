const expect = require('chai').expect;
const script = require('../lib/transform');
const image = require(__driname + '/../img/**/*.bmp');

describe('Expect neat things', () => {
  it('should change pixel values by dividing by a new number', () => {
    expect(fs.readFileSync('../img/palette-bitmap.bmp')).to.eql(fs.readFileSync('../img/new-palette-bitmap.bmp'));
  });
});
