import { AppPage } from './app.po';

describe('tax-calculator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have right income details form heading', () => {
    page.getParagraphText('app-income-details h3')
    .then((title: string) => {
      expect(title).toEqual('Income');
    });
  });

  it('should have right tax details form heading', () => {
    page.getParagraphText('app-tax-details h3')
    .then((title: string) => {
      expect(title).toEqual('Tax details');
    });
  });

  it('should have calculate tax details when only gross salary is provided', () => {
    page.fillGrossSalaryField();
    page.fillSuperannuationField();
    page.getParagraphText('[id="taxResultId"]').then((result: string) => {
      expect(result).toEqual('$7,797.00');
    });
  });

  it('should have calculate tax details when gross salary and super amounts are provided', () => {
    page.fillGrossSalaryField();
    page.fillSuperannuationField();
    page.getParagraphText('[id="superannuationResultId"]').then((result: string) => {
      expect(result).toEqual('$5,000.00');
    });
  });
});
