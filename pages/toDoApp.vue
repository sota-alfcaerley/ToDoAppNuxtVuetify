/* eslint-disable vue/no-parsing-error */
<template>
    <div>
        <v-card color="grey lighten-5">
            <v-container>
                <v-row>
                    <v-card-title>
                        ToDoApp-Nuxt-Vuetify
                    </v-card-title>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn
                            color="blue darken-4"
                            dark
                            @click="onToggleIsFinished()">
                        Add Task
                        </v-btn>
                            <AddTaskDialog />
                    </v-col>
                    <v-col cols="12">
                        <Counter />
                    </v-col>
                    <v-col v-for="(task, taskIdx) in taskList" :key="taskIdx" cols="12">
                        <Tasks
                            :no="taskIdx + 1"
                            :task-idx="taskIdx"
                            :title="task.title"
                            :limit="task.limit"
                            :priority="task.priority" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AddTaskDialog  from '~/components/ToDoApp/AddTaskDialog.vue'
import Tasks from'~/components/ToDoApp/Tasks'
import Counter from '~/components/ToDoApp/Counter.vue'
import { TodoStore } from '~/store'

@Component({
    components: {
        AddTaskDialog,
        Tasks, 
        Counter
    }
})

export default class ToDoApp extends Vue{

    get taskList() {
        return TodoStore.taskList
    }

    get onToggleIsFinished(){
        return TodoStore.toggleOpenDialog
    }
}
</script>
<style>
.inner-buttons{
    text-align: right;
}
</style>