/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
    <v-row justify="center">
        <v-col cols="8">
            Total：
            {{ totalCount }}
        </v-col>
        <v-col cols="2">
            Finished：
            {{ finishedCount }}
        </v-col>
        <v-col cols="2">
            NotFinished：
            {{ notFinishedCount }}
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import { TodoStore } from '~/store'

@Component
export default class Tasks extends Vue {
    get totalCount(): number{
        return TodoStore.counter
    }

    get finishedCount(): number{
        return TodoStore.getFinishedCount
    }

    get notFinishedCount(): number{
        return TodoStore.getNotFinishedCount
    }
}
</script>

<style>
</style>