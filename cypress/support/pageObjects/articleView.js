import * as common from '../commonFunctions'

const articleTitleSelector = '.mw-page-title-main'
const redirectionSelector = '.mw-redirectedfrom'

const tableOfContent = '#mw-panel-toc-list'

const viewHistory = '#ca-history'

const checkArticleUrl = (articleTitle) => {
    const articleUrl = articleTitle.split(' ').join('_')
    common.checkIncludesURL(`/wiki/${articleUrl}`)
}

export const goToRevisionHistory = () => {
    cy.get(viewHistory).click();
}

export const checkArticleTitle = (articleTitle) => {
    cy.get(articleTitleSelector).should('have.text', articleTitle)
}

export const checkArticle = (articleTitle) => {
    checkArticleUrl(articleTitle)
    checkArticleTitle(articleTitle)
}

export const checkRedirection = (originInput) => {
    cy.get(redirectionSelector).should('have.text', `(Redirected from ${originInput})`)
}

export const openChapterFromTOC = (chapter) => {
    const chapterInput = chapter.split(' ').join('_')
    cy.get(tableOfContent).should('be.visible')
    cy.get(`[href="#${chapterInput}"] > .vector-toc-text`).click()
    cy.get(`#${chapterInput}`).should('be.visible')
}

export const openNthExternalLink = (n, targetUrl) => {
    cy.get('.external').eq(n-1).invoke('attr', 'href').should('equal', targetUrl);
}

export const viewNthReference = (n) => {
    cy.get(`#cite_ref-${n}`).click();
    cy.get(`#cite_note-${n}`).should('be.visible');
} 