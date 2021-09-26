<template>
    <v-card :class="{finished: isFinished}">
        <v-row justify="center">
            <v-col cols="1" align-self="center">
                <v-simple-checkbox v-model="IsFinished" color="blue darken-4">
                </v-simple-checkbox>
            </v-col>
            <v-col cols="6" align-self="center">
                {{ no }}
                .
                {{ title }}
            </v-col>
            <v-col cols="2" align-self="center">
                {{ limit }}
            </v-col>
            <v-col cols="1" align-self="center">
                {{ priority }} {{ IsFinished }}
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
// import { mapState } from "vuex";

@Component
export default class Tasks extends Vue{

    @Prop({ type: Object })
    task?: object
    
    @Prop({ type: Number})
    taskIdx?: number;
     
    @Prop({ type: Number})
    no?: number;

    @Prop({ type: String})
    title!: string;

    @Prop({ type: Date })
    limit?: Date;

    @Prop({ type: String })
    priority!: string

    @Prop({ type: Boolean })
    IsFinished!: boolean

    isFinished: boolean = this.IsFinished
    // toggle(){
    //     this.$store.commit('toggle', this.taskIdx)
    // }
        styleObject: object = {
            'background-color':"#E3F2FD"
        }
}
</script>

<style>
.finished{
    background-color: #BBDEFB;
}
</style>