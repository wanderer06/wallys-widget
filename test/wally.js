const { describe, it } = require('mocha');
const expect = require('chai').expect;
const wally = require('../src/wally');

describe('An order', () => {

  it('should contain at least a pack', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = wally;

    expect(target(1, ranges)).to.deep.equal({ 250: 1 });
  });

  it('should contain a pack', ( )=> {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = wally;

    expect(target(250, ranges)).to.deep.equal({ 250: 1 });
  });

  it('should use largest pack size available', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = wally;

    expect(target(251, ranges)).to.deep.equal({ 500: 1 });
  });

  it('should use the optimal ammount of packs', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = wally;

    expect(target(501, ranges)).to.deep.equal({ 500: 1, 250: 1 });
  });

  it('should use the optimal ammount of packs', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = wally;

    expect(target(12001, ranges)).to.deep.equal({ 5000: 2, 2000: 1, 250: 1 });
  });

  it('should be a number', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = () => wally('a string', ranges);

    expect(target).to.throw('First argument must be a positive number');
  });

  it('should be a positive number', () => {
    const ranges = [ 250, 500, 1000, 2000, 5000 ];
    const target = () => wally(-27, ranges);

    expect(target).to.throw('First argument must be a positive number');
  });

  it('should be within an array or packs', () => {
    const ranges = 'not an array';
    const target = () => wally(42, ranges);

    expect(target).to.throw('Second argument must be of type array');
  });

});


