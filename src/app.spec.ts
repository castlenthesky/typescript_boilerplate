import { expect } from 'chai';
import testFunction from './app';

describe('Function to test:', () => {
  it('Should return "Hello"', () => {
    expect(testFunction()).to.equal('hello');
  });
});
