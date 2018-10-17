import { BonapartModule } from './bonapart.module';

describe('BonapartModule', () => {
  let bonapartModule: BonapartModule;

  beforeEach(() => {
    bonapartModule = new BonapartModule();
  });

  it('should create an instance', () => {
    expect(bonapartModule).toBeTruthy();
  });
});
