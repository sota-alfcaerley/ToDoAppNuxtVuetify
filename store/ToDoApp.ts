import Vue from "vue"
import Vuex from 'vuex' 
import { Module, VuexModule } from 'vuex-module-decorators'
import tasks from '~/assets/json/tasks.json' 

Vue.use(Vuex)

type Task = typeof tasks.task.tasks

export interface Itasks {
  tasks: Task; // 数字が増えてくカウンター
}

// @Module({
//     name: 'todoappmodule',
//     stateFactory: true,
//     namespaced: true,
//   })

// export default class ToDoAppModule extends VuexModule {
//     public tasks: Task = tasks.task.tasks;

//     counter = 0;
//     finishedTasksCount: number = 0;
//     notFinishedTasksCout: number = 0; 

//     public get getTasks(): object[] {
//         return this.tasks
//     }
  
//   }

@Module
class ToDoAppModule extends VuexModule{
  public tasks: Task = tasks.task.tasks;
}

const store = new Vuex.Store({
  state:{},
  modules: {
    ToDoAppModule
  }
}) 