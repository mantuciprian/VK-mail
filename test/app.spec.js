const expect =  require('chai').expect;
const appTest = require('../app');
console.log('mytest', appTest.test(5))
const sinon = require('sinon');
const chai = require('chai');
chai.use(require('sinon-chai'));
const myObj = require('../app').myObj;
const recap = require('../app').recap;


describe('testing the function double', ()=> {
    const spy = sinon.spy(myObj, 'double');
    const spy2 = sinon.spy(myObj, 'triple');

 it('should call the double function', ()=> {
     myObj.met(2, 'd');
     expect(spy).to.be.called;
     expect(spy).to.be.calledWith(2);
     expect(spy2).to.not.be.called;
     spy.restore();
     spy2.restore();
 });

});

describe('recap', ()=> {
    const spy = sinon.spy(recap, 'repeat');
    const spy2 = sinon.spy(recap, 'switcher')

    const testValues = [2, 10, 7];

    recap.switcher(10, 20);

    // test switcher

    testValues.map((v) => {
       if(v < 5) {
           it(`should return lesser for value ${v}`, ()=> {
               expect(recap.switcher(v)).to.be.equal('lesser');
           });
       } else if(v >=5 ) {
           it(`should return grater for value ${v}`, ()=> {
               expect(recap.switcher(v)).to.be.equal('grater');
           });

           it(`when the value is grater than five should call the repeat function`, ()=> {
               expect(spy).to.be.called;
           });
       }
    });
});