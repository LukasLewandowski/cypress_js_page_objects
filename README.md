# Cypress boilerplate with simple Page Objects implementation

Based on: https://testautomationu.applitools.com/cypress-tutorial and on Filip Hric https://github.com/filiphric

####Approach 1:

create page object using class:

```
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
```

and then you can use it inside test:

```
import {ToDoPage} from '../page-objects/todo-page-using-class'

const todoPage = new ToDoPage()

describe('todo actions', () => {
  beforeEach(() => {
    todoPage.navigate()

    todoPage.addTodo('Clean room')
  })
```

####Approach 2:

create page object using exporting functions:

```
export function navigate() {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(todoText) {
  cy.get('.new-todo').type(todoText + '{enter}')
}
```

and then import it inside test:

```
import * as todoPage from '../page-objects/todo-page'
```

and use:

```
    todoPage.addTodo('Learn JS')
```
