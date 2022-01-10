import Vue from "vue"
import Vuex from 'vuex' 
import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import tasks from '~/assets/json/tasks.json' 

Vue.use(Vuex)

type Tasks = typeof tasks.task.tasks
type Task = typeof tasks.task.tasks[0]

export interface Itasks {
  tasks: Tasks;
  task: Task;
}

@Module({
    name: 'todo',
    stateFactory: true,
    namespaced: true,
  })

export default class Todos extends VuexModule {
    public taskList: Tasks = tasks.task.tasks;
    public counter: number = tasks.task.tasks.length;
    public isOpenDialog: boolean = false;
    // public finishedCount: number = this.taskList.filter((task) => task.isFinished).length;
    // public notFinishedCount: number = this.taskList.filter((task) => !task.isFinished).length; 

    public get getFinishedCount()
    {
      return this.taskList.filter((task) => task.isFinished).length;
    }

    public get getNotFinishedCount()
    {
      return this.taskList.filter((task) => !task.isFinished).length;
    }

    @Mutation
    toggleOpenDialog()
    {
      this.isOpenDialog = !this.isOpenDialog
    }

    @Mutation
    toggle(idx: number){
       this.taskList[idx].isFinished = !this.taskList[idx].isFinished;
    }

    @Mutation
    addTask(task: Task)
    {
      this.taskList.push(task)
    }
}
