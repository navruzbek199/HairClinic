import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand()

Cypress.Commands.add('getInStory', getInStory)
Cypress.Commands.add('findInStory', findInStory)

function getInStory(selector) {
  return cy.get('#storybook-preview-iframe').then($iframe => {
    const doc = $iframe.contents()

    return cy.wrap(doc.get(selector))
  })
}

function findInStory(selector) {
  return cy.get('#storybook-preview-iframe').then($iframe => {
    const doc = $iframe.contents()

    return cy.wrap(doc.find(selector))
  })
}
