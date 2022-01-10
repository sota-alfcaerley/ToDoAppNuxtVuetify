
/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todo from '~/store/todo'

let TodoStore: Todo
function initializeStores(store: Store<any>): void {
  TodoStore = getModule(Todo, store)
}

export { initializeStores, TodoStore }