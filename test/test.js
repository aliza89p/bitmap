const fs = require('fs');
const expect = require('chai').expect;
const script = require('../transform');
const headers = headers;

describe('Different images', () => {
  it('The first image shoudl be different than the second image', () => {
    expect(fs.readFileSync('img/palette-bitmap.bmp')).to.not.eql(fs.readFileSync('img/new-palette-bitmap.bmp'));
  });
});

describe('headers exporting', () => {
  before(done => {
    fs.readFile('../transform.js', done);
  });
  it('should have the type BM', () => {
    expect(headers).to.not.have.property('type', 'BM');
  });
});
