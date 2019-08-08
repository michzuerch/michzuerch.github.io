<template>
<nav>
    <v-toolbar flat>
        <v-toolbar-title class="text-uppercase grey-text">
            <span class="font-weight-light">todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="grey">
            <span>Logout</span>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
        <p>Test</p>
        
    </v-navigation-drawer>

</nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    }
}
</script>
