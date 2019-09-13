<template>
<v-container fluid>
    <v-layout row wrap justify-space-between>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/tools/Java-Logo.svg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">Programmierung Java</v-card-title>
                </v-img>
                <v-card-text>
                    <ul>
                        <li>Java</li>
                        <li>IntelliJ</li>
                        <li>Wildfly</li>
                        <li>Vaadin</li>
                        <li>Maven</li>
                        <li>Apache FOP</li>
                        <li>Jasperreports</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/tools/JavaScript-Logo.svg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">Programmierung Javascript</v-card-title>
                </v-img>
                <v-card-text>
                    <ul>
                        <li>ECMAScript 3, Typescript</li>
                        <li>HTML 5, CSS 3</li>
                        <li>Tailwind, Bulma</li>
                        <li>Vue, Vuetify</li>
                        <li>npm, yarn, webpack</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/tools/clouds.jpg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">Virtualisierung / Cloud</v-card-title>
                </v-img>
                <v-card-text>
                    <ul>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>Postgresql, Mongodb</li>
                        <li>Openshift</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
