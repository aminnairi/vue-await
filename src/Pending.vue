<template>
    <div v-if="state.isPending">    
        <slot />
    </div>    
</template>

<script>
    export default {
        name: "Pending",
        inject: ["state"]
    };
</script>
