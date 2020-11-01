<template>
    <div v-if="!state.isPending && state.response !== null">
        <slot v-bind:response="state.response" />
    </div>
</template>

<script>
    export default {
        name: "Then",
        inject: ["state"]
    };
</script>
