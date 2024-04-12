import * as urls from '../support/urls'
import * as articleView from '../support/pageObjects/articleView'

describe('Article Navigation', () => {

    const articleTitle = "Black hole"
    const chapter = "Formation and evolution"
    const targetUrl = 'https://www.bbc.co.uk/programmes/p00547f4'

    beforeEach(() => {
        cy.visit(urls.blackHoleArticle)
    })

    it('Navigate to section within the article', () => {
        articleView.checkArticleTitle(articleTitle)
        articleView.openChapterFromTOC(chapter)
    });

    it('Open external link in a new tab', () => {
        articleView.checkArticleTitle(articleTitle)
        articleView.openNthExternalLink(1, targetUrl)
    });

    it('Jump to corresponding reference section', () => {
        articleView.checkArticleTitle(articleTitle)
        articleView.viewNthReference(1)
      });

  });