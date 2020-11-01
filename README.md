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
                <p>Fetching users...</p>
            </pending>

            <then v-slot="{response}">
                <p>Successfully fetched users!</p>
                
                <table>
                    <thead>
                        <tr>
                            <th>Identifier</th>
                            <th>Username</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="user in response">
                            <td>{{ user.id }}</td>
                            <td>{{ user.username }}</td>
                        </tr>
                    </tbody>
                </table>
            </then>

            <catch v-slot="{error}">
                <p>Failed to fetch users.</p>
                <p>{{ error.message }}</p>
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
    }
</script>
```
