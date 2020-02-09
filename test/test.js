/**
 * Created by Gabriel on 18/05/2017.
 */

// Testing the expanded notation factorisation function
describe('getExpandedNotationArray', function () {
  it('Testing 1', function () {
    let result = getExpandedNotationArray(1);
    expect(result).to.eql([1, 0, 0, 0]);
  });
  it('Testing 10', function () {
    let result = getExpandedNotationArray(10);
    expect(result).to.eql([0, 10, 0, 0]);
  });
  it('Testing 100', function () {
    let result = getExpandedNotationArray(100);
    expect(result).to.eql([0, 0, 100, 0]);
  });
  it('Testing 1000', function () {
    let result = getExpandedNotationArray(1000);
    expect(result).to.eql([0, 0, 0, 1000]);
  });
  it('Testing 2345', function () {
    let result = getExpandedNotationArray(2345);
    expect(result).to.eql([5, 40, 300, 2000]);
  });
});

// Testing the conversion function
describe('intToRoman', function () {
  it('Testing 1', function () {
    let result = intToRoman(1);
    expect(result).to.be('I');
  });
  it('Testing 2', function () {
    let result = intToRoman(2);
    expect(result).to.be('II');
  });
  it('Testing 3', function () {
    let result = intToRoman(3);
    expect(result).to.be('III');
  });
  it('Testing 4', function () {
    let result = intToRoman(4);
    expect(result).to.be('IV');
  });
  it('Testing 5', function () {
    let result = intToRoman(5);
    expect(result).to.be('V');
  });
  it('Testing 6', function () {
    let result = intToRoman(6);
    expect(result).to.be('VI');
  });
  it('Testing 7', function () {
    let result = intToRoman(7);
    expect(result).to.be('VII');
  });
  it('Testing 8', function () {
    let result = intToRoman(8);
    expect(result).to.be('VIII');
  });
  it('Testing 9', function () {
    let result = intToRoman(9);
    expect(result).to.be('IX');
  });
  it('Testing 10', function () {
    let result = intToRoman(10);
    expect(result).to.be('X');
  });
  it('Testing 20', function () {
    let result = intToRoman(20);
    expect(result).to.be('XX');
  });
  it('Testing 30', function () {
    let result = intToRoman(30);
    expect(result).to.be('XXX');
  });
  it('Testing 40', function () {
    let result = intToRoman(40);
    expect(result).to.be('XL');
  });
  it('Testing 50', function () {
    let result = intToRoman(50);
    expect(result).to.be('L');
  });
  it('Testing 60', function () {
    let result = intToRoman(60);
    expect(result).to.be('LX');
  });
  it('Testing 70', function () {
    let result = intToRoman(70);
    expect(result).to.be('LXX');
  });
  it('Testing 80', function () {
    let result = intToRoman(80);
    expect(result).to.be('LXXX');
  });
  it('Testing 90', function () {
    let result = intToRoman(90);
    expect(result).to.be('XC');
  });
  it('Testing 100', function () {
    let result = intToRoman(100);
    expect(result).to.be('C');
  });
  it('Testing 200', function () {
    let result = intToRoman(200);
    expect(result).to.be('CC');
  });
  it('Testing 300', function () {
    let result = intToRoman(300);
    expect(result).to.be('CCC');
  });
  it('Testing 400', function () {
    let result = intToRoman(400);
    expect(result).to.be('CD');
  });
  it('Testing 500', function () {
    let result = intToRoman(500);
    expect(result).to.be('D');
  });
  it('Testing 600', function () {
    let result = intToRoman(600);
    expect(result).to.be('DC');
  });
  it('Testing 700', function () {
    let result = intToRoman(700);
    expect(result).to.be('DCC');
  });
  it('Testing 800', function () {
    let result = intToRoman(800);
    expect(result).to.be('DCCC');
  });
  it('Testing 900', function () {
    let result = intToRoman(900);
    expect(result).to.be('CM');
  });
  it('Testing 1000', function () {
    let result = intToRoman(1000);
    expect(result).to.be('M');
  });
  it('Testing 2000', function () {
    let result = intToRoman(2000);
    expect(result).to.be('MM');
  });
  it('Testing 3000', function () {
    let result = intToRoman(3000);
    expect(result).to.be('MMM');
  });
});