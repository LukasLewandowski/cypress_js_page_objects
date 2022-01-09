import {ToDoPage} from '../page-objects/todo-page-using-class'
import {
  validateTodoText,
  toggleTodo,
  clearCompleted,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page'

const todoPage = new ToDoPage()

describe('todo actions', () => {
  beforeEach(() => {
    todoPage.navigate()

    todoPage.addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean room')

    validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      toggleTodo(0)
      validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      toggleTodo(0)

      clearCompleted()

      validateNumberOfTodosShown(0)
    })
  })
})

it('Cypress App actions test 1', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.window().then(({app}) => {
    // do something with app
  })
})
