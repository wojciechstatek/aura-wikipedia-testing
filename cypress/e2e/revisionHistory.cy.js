import * as urls from '../support/urls'
import * as articleView from '../support/pageObjects/articleView'
import * as revisionHistory from '../support/pageObjects/revisionHistory'

describe('Revision History', () => {

    const articleTitle = "Black hole"


    beforeEach(() => {
        cy.visit(urls.blackHoleArticle)
    })

    it('Display past revisions', () => {
        articleView.goToRevisionHistory();
        revisionHistory.checkRevisionUrl(articleTitle, 'History')
        revisionHistory.revisionHistoryVisible();
    });

    it('View specific revision content', () => {
        articleView.goToRevisionHistory();
        revisionHistory.checkRevisionUrl(articleTitle, 'History')
        revisionHistory.openNthRevisionContent(2);
        revisionHistory.checkRevisionUrl(articleTitle, 'Content')
        revisionHistory.revisionTextboxVisible();
      });

      it('Compare two revisions', () => {
        articleView.goToRevisionHistory();
        revisionHistory.checkRevisionUrl(articleTitle, 'History')
        revisionHistory.chooseRevisionsToDiff(5, 2);
        revisionHistory.checkRevisionUrl(articleTitle, 'Compare')
        revisionHistory.revisionDiffVisible()
      });
  });
