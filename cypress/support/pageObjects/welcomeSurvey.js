import * as common from '../commonFunctions'
import * as urls from '../urls'

const welcomeHeading = '.firstHeading'

export const checkWelcomeHeading = (username) => {
    common.checkIncludesURL(urls.welcomeSurvey)
    cy.get(welcomeHeading).should('eq', `Welcome, ${username}`)
}