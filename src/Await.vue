<template>
    <div>
        <slot />
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "Await",

        props: {
            promise: {
                type: Promise,
                default: Promise.reject
            }
        },

        data() {
            return {
                state: Vue.observable({
                    isPending: true,
                    response: null,
                    error: null
                })
            };
        },

        provide() {
            return {
                state: this.state
            };
        },

        created() {
            this.state.isPending = true;

            this.promise().then(response => {
                this.state.response = response;
                this.state.error = null;
            }).catch(error => {
                this.state.response = null;
                this.state.error = error;
            }).finally(() => {
                this.state.isPending = false;
            });

        }
    };
</script>
