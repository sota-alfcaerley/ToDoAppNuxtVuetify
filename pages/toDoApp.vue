<template>
    <div>
        <AddTaskDialog />
        <v-container>
        <v-card>
            <v-card-title>
                To-Do-App-Nuxt-Vuetify
            </v-card-title>
            <v-card-text>
                <Tasks />
            </v-card-text>
        </v-card>
        </v-container>
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

</style>