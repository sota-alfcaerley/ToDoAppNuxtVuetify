<template>
    <v-card :color="isFinished ? 'blue lighten-5' : ''">
        <v-container>
            <v-row>
                <v-col cols="1" align-self="center">
                    <v-simple-checkbox v-model="isFinished" color="blue darken-4" @click="onToggle(taskIdx)">
                    </v-simple-checkbox>
                </v-col>
                <v-col align-self="center">
                    {{ no }}
                    .
                    {{ title }}
                </v-col>
                <v-col cols="2" align-self="center" class="d-none d-md-flex">
                    {{ limit }}
                </v-col>
                <v-col cols="1" align-self="center" class="d-none d-md-flex">
                    {{ priority }}
                </v-col>
                <v-col cols="1" align-self="center" class="d-none d-md-flex">
                    <v-btn elevation="1" fab x-small color="blue darken-4">
                        <v-icon color="white">
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn elevation="1" fab x-small color="blue darken-4">
                        <v-icon color="white">
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TodoStore } from '~/store'

@Component
export default class Tasks extends Vue{
    
    @Prop({ type: Number})
    taskIdx!: number;
     
    @Prop({ type: Number})
    no?: number;

    @Prop({ type: String})
    title!: string;

    @Prop({ type: String })
    limit?: string;

    @Prop({ type: String })
    priority!: string

    isFinished: boolean = TodoStore.taskList[this.taskIdx].isFinished

    onToggle(taskIdx: number){
        return TodoStore.toggle(taskIdx)
    }
}
</script>

<style>
</style>