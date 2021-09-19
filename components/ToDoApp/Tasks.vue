<template>
    <span>
        <v-row justify="center">
            <v-col cols="1">
                <v-simple-checkbox v-model="check" color="deep-purple darken-4">
                </v-simple-checkbox>
            </v-col>
            <v-col cols="7">
                {{ no }}
                .
                {{ title }}
            </v-col>
            <v-col cols="2">
                {{ limit }}
            </v-col>
            <v-col cols="1">
                {{ priority }}
            </v-col>
        </v-row>
    </span>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tasks extends Vue{
    
    check: boolean = false;

    @Prop({ type: Number})
    no?: number;

    @Prop({ type: String})
    title!: string;

    @Prop({ type: Date })
    limit?: Date;

    @Prop({ type: String })
    priority!: string

    
}
</script>

<style>

</style>