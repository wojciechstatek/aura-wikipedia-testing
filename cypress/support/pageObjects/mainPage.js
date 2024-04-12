const searchTextField = '#searchInput'
const searchButton = '.cdx-search-input > .cdx-button'

const searchMenu = '[aria-label="Search results"]'

const loginButton = '#pt-login-2'
const registerButton = '#pt-createaccount-2'

export const typeInSearchBox = (articleTitle) => {
    cy.get(searchTextField).type(`${articleTitle}`)
}

export const clickSearchButton = () => {
    cy.get(searchButton).click()
}

export const showSearchMenu = () => {
    cy.get(searchMenu).should('be.visible')
}

export const searchForArticle = (articleTitle) => {
    typeInSearchBox(articleTitle)
    clickSearchButton()
}

export const goToRegistration = () => {
    cy.get(registerButton).click()
}

export const goToLogin = () => {
    cy.get(loginButton).click()
}