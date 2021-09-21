<template>
    <div>
        <v-card color="grey lighten-5">
            <v-container>
                <v-card-title>
                    ToDoApp-Nuxt-Vuetify
                </v-card-title>
                <v-btn
                  color="deep-purple darken-4"
                  dark
                  @click.stop="dialog = true"
                >
                  Add Task
                </v-btn>
                <v-dialog
                    v-model="dialog"
                    width="1000">
                    <AddTaskDialog />
                </v-dialog>
                <v-row>
                    <v-col v-for="(task, taskIdx) in todos" :key="taskIdx" cols="12">
                        <v-card class="pa-2" outlined>
                            <v-row>
                                <v-col cols="11" align-self="center">                                    
                                    <Tasks 
                                    :no="task.No"
                                    :title="task.title"
                                    :limit="task.limit"
                                    :priority="task.priority" />
                                </v-col>
                                <v-col cols="1">
                                    <v-btn elevation="1" fab x-small color="deep-purple darken-4" >
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                    <v-btn elevation="1" fab x-small color="deep-purple darken-4" >
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { mapMutations } from 'vuex'
import tasks from '~/assets/json/tasks.json'
import AddTaskDialog from '~/components/ToDoApp/AddTaskDialog.vue'
import Tasks from'~/components/ToDoApp/Tasks.vue'
import { ToDoModule }  from '~/store/ToDoApp'


@Component({
    components: {
        AddTaskDialog,
        Tasks
    }
})

export default class ToDoApp extends Vue{
    dialog: boolean = false;
    tasks: object[] = tasks.task.tasks;
    taskss: object[] = this.$store.state.tasks
    
    get todos() {
        return ToDoModule.tasks
    } 
}
</script>
<style>
.inner-buttons{
    text-align: right;
}
</style>