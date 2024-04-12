/* Helper file to store functions that are use in different pageObjects functions */

export const whitespaceToUnderscoreConversion = (text) => {
    return text.split(' ').join('_')
}

export const checkIncludesURL = (text) => {
    return cy.url().should('include', text);
}