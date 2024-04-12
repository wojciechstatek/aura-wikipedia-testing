import * as common from '../commonFunctions'

const pageHistory = '#pagehistory'
const oldidRadioInput = '[id*="mw-oldid-"]'
const diffRadioInput = '[id*="mw-diff-"]'
const compareRevisions = '.mw-history-compareselectedversions-button'
const dateOfChange = '.mw-changeslist-date'
const revisionBox = '.mw-revision'
const diffView = '.diff'

export const checkRevisionUrl = (articleTitle, sectionOfRevision) => {
    const articleUrl = common.whitespaceToUnderscoreConversion(articleTitle)
    switch(sectionOfRevision){
        case 'History':
            common.checkIncludesURL(`/w/index.php?title=${articleUrl}&action=history`);
            break;
        case 'Content':
            common.checkIncludesURL(`/w/index.php?title=${articleUrl}&oldid=`);
            break;
        case 'Compare':
            common.checkIncludesURL(`/w/index.php?title=${articleUrl}&diff=`);
            break;
        default:
            throw new Error('Invalid "sectionOfRevision" argument')
    }  
}

export const revisionHistoryVisible = () => {
    cy.get(pageHistory).should('be.visible');
}

export const openNthRevisionContent = (n) => {
    cy.get(dateOfChange).eq(n-1).click();
}

export const revisionTextboxVisible = () => {
    cy.get(revisionBox).should('be.visible');
}

export const findRevisionToDiff = (type, eq) => {
    if (type == 'old'){
        cy.get(`${oldidRadioInput}`).eq(eq-1).should('not.have.attr', 'disabled')
        cy.get(`${oldidRadioInput}`).eq(eq-1).click()
    }
    if (type == 'diff'){
        cy.get(`${diffRadioInput}`).eq(eq-1).should('not.have.attr', 'disabled')
        cy.get(`${diffRadioInput}`).eq(eq-1).click() 
    }
}

export const chooseRevisionsToDiff = (old, diff) => {
    findRevisionToDiff('old', old)
    findRevisionToDiff('diff', diff)
    cy.get(compareRevisions).eq(0).click();
}

export const revisionDiffVisible = () => {
    cy.get(diffView).should('be.visible');
}
