import * as fromPreparation from './preparation.actions';

describe('loadPreparations', () => {
  it('should return an action', () => {
    expect(fromPreparation.loadPreparations().type).toBe('[Preparation] Load Preparations');
  });
});
