# vue-await

Vue.js components for normalizing your API calls.

## Requirements

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)

## Installation

```console
$ npm install --save-dev aminnairi/vue-await
```

## Uninstallation

```console
$ npm uninstall @aminnairi/vue-await
```

## Usage

```vue
<template>
    <div>
        <h1>Users</h1>

        <await :promise="promise">
            <pending> 
                <p>Fetching users, please wait...</p>
            </pending>

            <then v-slot="{response}">
                <p>Fetched {{ response.length }} users.</p>
                <p>{{ JSON.stringify(response) }}</p>
            </then>

            <catch v-slot="{error}">
                <p>There was an error attempting to fetch from JSONPlaceholder servers.</p>
                <p>{{ JSON.stringify(error) }}</p>
            </catch>
        </await>
    </div>
</template>

<script>
    import {Await, Pending, Then, Catch} from "@aminnairi/vue-await";

    export default {
        components: {
            Await,
            Pending,
            Then,
            Catch
        },

        data() {
            return {
                promise() {
                    return fetch("https://jsonplaceholder.typicode.com/users").then(response => {
                        if (!response.ok) {
                            throw new Error("Bad response from the server.");
                        }

                        return response.json();
                    });
                }
            };
        }
    };
</script>
```
