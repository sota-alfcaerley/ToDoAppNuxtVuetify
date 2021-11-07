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
    name: 'todo',
    stateFactory: true,
    namespaced: true,
  })

export default class Todos extends VuexModule {
    public taskList: Task = tasks.task.tasks;
    public counter: number = tasks.task.tasks.length;
    public finishedCount: number = 0;
    public notFinishedCount: number = 0; 

    @Mutation
    toggle(idx: number){
       this.taskList[idx].isFinished = !this.taskList[idx].isFinished;
    }

    public get totalCount(): number
    {
      return this.counter;    
    }
}
