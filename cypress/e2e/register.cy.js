import * as urls from '../support/urls'
import * as mainPage from '../support/pageObjects/mainPage'
import * as registerPage from '../support/pageObjects/registerPage'
import * as loginPage from '../support/pageObjects/loginPage'
import * as welcomeSurvey from '../support/pageObjects/welcomeSurvey'
import * as databaseHelper from '../support/databaseHelper'

describe('Register functionality', () => {
    const username = 'Ws-test-account'
    const password = 'a1idvJuH2V'
    const otherPassword = 'a1id.vJuH2V'
    const email = 'wojciechstatek+testwiki1@gmail.com'
    
    context('Navigate to registration', () => {
        beforeEach(() => {
            databaseHelper.deleteUserFromDB(username)
            cy.visit('/')
        })
        
        it('Create new account - from main page', () => {
            mainPage.goToRegistration()
            registerPage.accountCreationSuccessful(username, password, email)
            welcomeSurvey.checkWelcomeHeading()
        });

        it('Create new account - through login page', () => {
            mainPage.goToLogin()
            loginPage.goToRegistration()
            registerPage.accountCreationSuccessful(username, password, email)
            welcomeSurvey.checkWelcomeHeading()
        });
        
    })

    context('Start on register page', () => {
        beforeEach(() => {
            databaseHelper.deleteUserFromDB(username)
            cy.visit(urls.registerPage); 
        })

        it('Create new account - successfully', () => {
            registerPage.accountCreationSuccessful(username, password, email)
            welcomeSurvey.checkWelcomeHeading()
        });

        it('Create new account - password mismatch', () => {
            registerPage.accountCreationPasswordMismatch(username, password, otherPassword, email)
        })

    })

})