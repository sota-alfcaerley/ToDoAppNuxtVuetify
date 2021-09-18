<template>
    <span>
        {{ no }}
        .
        {{ title }}
        {{ limit }}
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

    
}
</script>

<style>

</style>