import * as common from '../commonFunctions'
import * as urls from '../urls'

const loginInput = '#wpName1'
const passwordInput = '#wpPassword1'
const loginButton = '#wpLoginAttempt'
const forgotPassword = '[title="Special:PasswordReset"]'
const createAccountButton = '#mw-createaccount-join'
const errorBox = '.mw-message-box'

export const clickLoginButton = () => {
    cy.get(loginButton).click();
}

export const logIn = (username, password) => {
    cy.get(loginInput).clear().type(username);
    cy.get(passwordInput).clear().type(password);
    clickLoginButton()
}

export const checkLogInSuccessful = () => {
    cy.url().should('not.include', '/wiki/Special:UserLogin');
}

export const goToRegistration = () => {
    cy.get(createAccountButton).click();
}

export const forgotPasswordCheck = () => {
    cy.get(forgotPassword).click();
    common.checkIncludesURL(urls.forgotPassword)
}

export const checkErrorBox = () => {
    cy.get(errorBox).should('be.visible');
}

