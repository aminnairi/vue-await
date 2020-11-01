<template>
    <div v-if="!state.isPending && state.error !== null">
        <slot v-bind:error="state.error" />
    </div>
</template>

<script>
    export default {
        name: "Catch",
        inject: ["state"]
    };
</script>
