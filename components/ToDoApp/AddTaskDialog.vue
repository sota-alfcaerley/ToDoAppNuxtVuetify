<template>
    <v-dialog v-model="isOpenDialog" @click:outside="onToggleIsFinished()">
        <v-card>
            <v-card-title class="text-h5 blue-grey lighten-5">
                Add Task Dialog
            </v-card-title>
            <v-container>
                <v-form>
                    <v-text-field label="Title">
                    </v-text-field>
                    <v-btn
                        color="blue darken-4"
                        dark
                        @click.stop="isOpenDate = true">
                        Select Limit
                    </v-btn>
                    <v-dialog
                            v-model="isOpenDate"
                            width="500">
                        <v-date-picker
                            year-icon="mdi-calendar-blank"
                            prev-icon="mdi-skip-previous"
                            next-icon="mdi-skip-next"
                            :show-current="true">
                        </v-date-picker>
                    </v-dialog>
                    <v-select
                        :items="priority"
                        item-text="label"
                        item-value="value"
                        label="Priority"
                        dense
                        solo
                    ></v-select>
                    <v-card-actions>
                    <v-btn
                        color="blue-grey"
                        text
                        @click="onToggleIsFinished()">
                        Close
                    </v-btn>
                    <v-btn
                        color="blue-grey"
                        text
                        @click="onToggleIsFinished()">
                        Add
                    </v-btn>
                    </v-card-actions>
                </v-form>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TodoStore } from '~/store'

@Component

export default class AddTaskDialog extends Vue{

    isOpenDate: boolean = false;

    dialog:boolean = TodoStore.isOpenDialog

    get isOpenDialog()
    {
        return TodoStore.isOpenDialog
    }

    get onToggleIsFinished(){
        return TodoStore.toggleOpenDialog
    }

    priority: object[] = [
        { label: 'High', value: 'High' },
        { label: 'Mid', value: 'Mid' },
        { label: 'Low', value: 'Low' }
    ]
}
</script>