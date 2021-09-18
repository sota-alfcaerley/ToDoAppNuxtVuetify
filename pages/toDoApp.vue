<template>
    <div>
        <AddTaskDialog />
        <v-card>
            <v-container>
                <v-card-title>
                    ToDoApp-Nuxt-Vuetify
                </v-card-title>
                <v-row>
                    <v-col v-for="(task, taskIdx) in tasks" :key="taskIdx" cols="12">
                        <v-card class="pa-2" outlined>
                            <v-row>
                                <v-col cols="10">
                                    <Tasks 
                                    :no="task.No"
                                    :title="task.title"
                                    :limit="task.limit" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn elevation="1" fab x-small color="cyan" right>
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                    <v-btn elevation="1" fab x-small color="teal" >
                                        <v-icon color="white">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                    <v-btn elevation="1" fab x-small color="red" >
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
import tasks from '~/assets/json/tasks.json'
import AddTaskDialog from '~/components/ToDoApp/AddTaskDialog.vue'
import Tasks from'~/components/ToDoApp/Tasks.vue'

@Component({
    components: {
        AddTaskDialog,
        Tasks
    }
})

export default class ToDoApp extends Vue{
    header: object[] = tasks.task.headers
    tasks: object[] = tasks.task.tasks;
}
</script>
<style>
.inner-buttons{
    text-align: right;
}
</style>