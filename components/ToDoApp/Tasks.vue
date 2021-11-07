/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
    <v-card>
        <v-row justify="center">
            <v-col cols="1" align-self="center">
                <v-simple-checkbox v-model="isFinished" color="blue darken-4" @click="onToggle(taskIdx)">
                <!-- <v-simple-checkbox v-model="toggleIsFinished" color="blue darken-4" @click="onToggle(taskIdx)"> -->
                </v-simple-checkbox>
            </v-col>
            <v-col cols="6" align-self="center">
                {{ no }}
                .
                {{ Title }}
            </v-col>
            <v-col cols="2" align-self="center">
                {{ limit }}
            </v-col>
            <v-col cols="1" align-self="center">
                {{ priority }} {{ isFinished }}
            </v-col>
            <v-col cols="1" align-self="center">
                <v-btn elevation="1" fab x-small color="blue darken-4" >
                    <v-icon color="white">
                        mdi-pencil
                    </v-icon>
                </v-btn>
                <v-btn elevation="1" fab x-small color="blue darken-4" >
                    <v-icon color="white">
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator'
import { TodoStore } from '~/store'

@Component
export default class Tasks extends Vue{
    
    @Prop({ type: Number})
    taskIdx?: number;
     
    @Prop({ type: Number})
    no?: number;

    @Prop({ type: String})
    Title!: string;

    @Prop({ type: Date })
    limit?: Date;

    @Prop({ type: String })
    priority!: string

    @Prop({ type: Boolean })
    isFinished!: boolean

    get toggleIsFinished()
    {
        return this.isFinished
    }

    onToggle(taskIdx: number){
        TodoStore.toggle(taskIdx)
    }
}
</script>

<style>
</style>