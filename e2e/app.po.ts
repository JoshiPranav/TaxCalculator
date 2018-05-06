import { browser, by, element } from 'protractor';

export class AppPage {
  private incomeDetailParams = {
    GrossSalary : 50000,
    Superannuation: 10,
  };

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(cssSelector: string) {
    return element(by.css(cssSelector)).getText();
  }

  fillGrossSalaryField() {
    element(by.css('[id="grossSalaryId"]')).sendKeys(this.incomeDetailParams.GrossSalary);
  }

  fillSuperannuationField() {
    element(by.css('[id="superannuationId"]')).sendKeys(this.incomeDetailParams.Superannuation);
  }
}
