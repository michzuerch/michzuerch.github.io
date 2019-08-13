<template>
<v-app id="keep">
    <v-app-bar app clipped-left color="amber">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="title ml-3 mr-5">
            <v-img src="https://picsum.photos/id/11/500/300" 
            lazy-src="https://picsum.photos/id/11/10/6" 
            aspect-ratio="1" 
            class="grey lighten-2" 
            width="60"
            height="60">
            </v-img>
        </span>
        <span class="title ml-3 mr-5">Michael Zürcher&nbsp;<span class="font-weight-light">Portfolio</span></span>
        <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="fa-search"></v-text-field>
        <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
        <v-list dense class="grey lighten-4">
            <template v-for="(item, i) in items">
                <v-layout v-if="item.heading" :key="i" align-center>
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-flex>
                </v-layout>
                <v-divider v-else-if="item.divider" :key="i" dark class="my-4"></v-divider>
                <v-list-item v-else :key="i" router :to="item.route">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="grey--text">
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-content>
        <router-view></router-view>
    </v-content>
</v-app>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        items: [{
                icon: 'fa-laptop',
                text: 'Über mich',
                route: 'about'
            },
            {
                icon: 'fa-laptop',
                text: 'Netzwerke',
                route: 'network'
            },
            {
                divider: true
            },
            {
                heading: 'Programmierung'
            },
            {
                icon: 'fa-laptop',
                text: 'Frontend',
                route: 'frontend'
            },
            {
                icon: 'fa-laptop',
                text: 'Backend',
                route: 'backend'
            },
            {
                divider: true
            },
            {
                icon: 'fa-laptop',
                text: 'Tools',
                route: 'tools'
            },
            {
                icon: 'fa-laptop',
                text: 'Gallery',
                route: 'gallery'
            },
            {
                divider: true
            },
            {
                icon: 'fa-laptop',
                text: 'Gallery',
                route: 'Gallery'
            },
        ],
    }),
}
</script>

<style>
#keep .v-navigation-drawer__border {
    display: none
}
</style>
