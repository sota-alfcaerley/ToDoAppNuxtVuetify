<template>
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
                            @click.stop="isOpenDate = true"
                            >
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
                            @click="isDialog=false"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue-grey"
                            text
                            @click.stop="isDialog=false"
                        >
                            Add
                        </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-container>
            </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TodoStore } from '~/store';

@Component

export default class AddTaskDialog extends Vue{

    isOpenDate: boolean = false;

    isDialog: boolean = true;

    @Prop({ type: Boolean})
    dialog?: boolean;

    priority: object[] = [
        { label: 'High', value: 'High' },
        { label: 'Mid', value: 'Mid' },
        { label: 'Low', value: 'Low' }
    ]

    get isOpenDialog(){
        return TodoStore.isOpenDialog
    }

    // picler: Date = new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
}
</script>