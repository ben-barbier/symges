import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {SymgesApp} from '../app/symges';

beforeEachProviders(() => [SymgesApp]);

describe('App: Symges', () => {
  it('should have the `defaultMeaning` as 42', inject([SymgesApp], (app: SymgesApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([SymgesApp], (app: SymgesApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

