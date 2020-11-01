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
                type: Function,
                default: () => Promise.reject
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
            console.group("root");
            console.log(this.$root);
            console.groupEnd();
            
            console.group("children");
            console.log(this.$root.$children);
            console.groupEnd();

            const childrenNames = this.$root.$children.map(child => child.name || "");

            console.group("childrenNames");
            console.log(childrenNames);
            console.groupEnd();

            if (!childrenNames.includes("Pending")) {
                throw new Error("The <pending></pending> is missing from the <await></await> children.");
            }

            if (!childrenNames.includes("Then")) {
                throw new Error("The <then></then> is missing from the <await></await> children.");
            }

            if (!childrenNames.includes("Catch")) {
                throw new Error("The <catch></catch> is missing from the <await></await> children.");
            }

            this.state.isPending = true;

            const maybePromise = this.promise();
            const type = Object.prototype.toString.call(maybePromise);

            if (type !== "[object Promise]") {
                throw new TypeError("Promise must be a function that returns a promise.");
            }

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
