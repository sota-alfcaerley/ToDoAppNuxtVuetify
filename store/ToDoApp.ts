import Vue from "vue"
import Vuex from 'vuex' 
import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import tasks from '~/assets/json/tasks.json' 

Vue.use(Vuex)

type Task = typeof tasks.task.tasks

export interface Itasks {
  tasks: Task;
}

@Module({
    name: 'todoappmodule',
    stateFactory: true,
    namespaced: true,
  })

export default class ToDoAppModule extends VuexModule {
    public taskList: Task = tasks.task.tasks;
    public counter = 0;
    public finishedTasksCount: number = 0;
    public notFinishedTasksCout: number = 0; 

    @Mutation
    toggle(idx: number){
      return this.taskList[idx].isFinished!;
      // ToDoAppModule.state.taskList[idx].isFinished!;
    }
  }
