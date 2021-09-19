<template>
        <v-card>
            <v-card-title class="text-h5 blue-grey lighten-5">
                Add Task Dialog
            </v-card-title>
            <v-container>
                <v-form>
                    <v-text-field label="Title">
                    </v-text-field>
                    <v-select
                      :items="items"
                      label="Priority"
                      dense
                      solo
                    ></v-select>
                    <v-btn
                        color="blue-grey"
                        text
                        @click="dialog = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue-grey"
                        text
                        @click="dialog = false"
                    >
                        Add
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component

export default class AddTaskDialog extends Vue{
    dialog: boolean = false;
     
}
</script>