import * as mainPage from '../support/pageObjects/mainPage'
import * as articleView from '../support/pageObjects/articleView'
import * as searchResults from '../support/pageObjects/searchResults'

describe('Search Functionality on main page', () => {

  const validArticle = 'Comb duck'
  const redirectionArticle = 'Automation testing'
  const redirectedArticle = 'Test automation'
  const nonExistingArticle = 'Battle of London 3000'
  const articleWithSpecialCharacters = 'Cypress (software)'
  const ambiguousArticle = 'Aura'
  
  beforeEach(() => {
    cy.visit('/'); 
  })

  it('Search for a valid article title', () => {
    mainPage.searchForArticle(validArticle)
    articleView.checkArticle(validArticle)
  });

  it('Search for a valid article title via redirection', () => {
    mainPage.searchForArticle(redirectionArticle)
    articleView.checkArticle(redirectedArticle)
    articleView.checkRedirection(redirectionArticle)
  });

  it('Search for a non-existent article title', () => {
    mainPage.searchForArticle(nonExistingArticle)
    searchResults.articleNotExist(nonExistingArticle)
  });

  it('Search with special characters or numbers', () => {
    mainPage.searchForArticle(articleWithSpecialCharacters)
    articleView.checkArticle(articleWithSpecialCharacters)
  });

  it('Search for ambiguous term', () => {
    mainPage.searchForArticle(ambiguousArticle)
    searchResults.ambiguousArticle(ambiguousArticle)
  });

  it('Show search meu after typing text', () => {
    mainPage.typeInSearchBox()
    mainPage.showSearchMenu()
  })
});