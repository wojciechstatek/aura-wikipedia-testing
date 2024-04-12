const noArticleExist = '.mw-search-createlink > i'

const mostCommonlyArticle = '.mw-content-ltr > p:eq(0)'

export const articleNotExist = (articleTitle) => {
    cy.get(noArticleExist).should('contain', `The page "${articleTitle}" does not exist.`)
}

export const ambiguousArticle = (articleTitle) => {
    cy.get(mostCommonlyArticle).should('contain', `${articleTitle} most commonly refers to:`)
}