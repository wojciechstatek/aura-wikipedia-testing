const loginInput = '#wpName2'
const passwordInput = '#wpPassword2'
const passwordConfirmationInput = '#wpRetype'
const emailInput = '#wpEmail'
const registerButton = '#wpCreateaccount'
const passwordMismatchSelector = '#mw-htmlform-invalid-input > #cdx-field__validation-message > #mw-message-box-error > div'
const passwordMismatchText = 'The passwords you entered do not match.'

const register = () => {
    cy.get(registerButton).click()
}

const passwordMismatchError = () => {
    cy.get(passwordMismatchSelector).should('be.visible').and('have.text', passwordMismatchText)
}

export const captchaOverride = () => {
    //Function can help to skip the step of Captcha verification
}

export const accountCreationSuccessful = (username, password, email) => {
    cy.get(loginInput).clear().type(username)
    cy.get(passwordInput).clear().type(password)
    cy.get(passwordConfirmationInput).clear().type(password)
    cy.get(emailInput).clear().type(email)
    captchaOverride()
    register()
}

export const accountCreationPasswordMismatch = (username, password1, password2, email) => {
    cy.get(loginInput).clear().type(username)
    cy.get(passwordInput).clear().type(password1)
    cy.get(passwordConfirmationInput).clear().type(password2)
    cy.get(emailInput).clear().type(email)
    captchaOverride()
    register()
    passwordMismatchError();
}