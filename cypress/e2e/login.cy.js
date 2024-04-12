import * as urls from '../support/urls'
import * as loginPage from '../support/pageObjects/loginPage'

describe('Login functionality', () => {

  const username = 'Ws-test-account'
  const password = '?Tp8X.YieLS$H+)'
  
  beforeEach(() => {
    cy.visit('/wiki/Special:UserLogin');
  });


  it('should login with valid credentials', () => {
    loginPage.logIn(username, password)
    loginPage.checkLogInSuccessful()
  });

  it('should display error message for invalid credentials', () => {
    loginPage.logIn('invalid', 'invalid')
    loginPage.checkErrorBox();
  });

  it('should display error message for empty username or password', () => {
    loginPage.clickLoginButton();
    cy.get('.error').should('be.visible');
  });

  it('should navigate to forgot password page', () => {
    loginPage.forgotPasswordCheck()
  });

});