/** second approach for Page Objects */

export class ToDoPage {
  navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    /** return this so you will be able to chain methods */
    return this
  }

  addTodo(todoText) {
    cy.get('.new-todo').type(todoText + '{enter}')
    return this
  }
}
