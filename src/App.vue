<template>
<v-app id="michzuerch">
    <v-app-bar app clipped-left color="blue" class="white--text">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
        <span class="title ml-3 mr-5">Michael Zürcher&nbsp;<span class="font-weight-light">Portfolio</span></span>
        <!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="fa-search"></v-text-field> -->
        <v-spacer></v-spacer>
        <span>
            <v-img src="img/button.svg" aspect-ratio="1" width="40">
            </v-img>
        </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="blue lighten-1">
        <v-card color="blue">
            <v-row>
                <v-col class="text-center">
                    <v-avatar size="100">
                        <img src="img/Avatar2019.jpg" alt="avatar">
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row text-center>
                <v-col>
                    <p class="title text-center white--text">Michael Zürcher</p>
                    <p class="sub-title1 text-center white--text">Programmierer und IT-Experte</p>
                </v-col>
            </v-row>
        </v-card>
        <v-list dense>
            <template v-for="(item, i) in items">
                <v-layout v-if="item.heading" :key="i" align-center>
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-flex>
                </v-layout>
                <v-divider v-else-if="item.divider" :key="i" class="my-4"></v-divider>
                <v-list-item v-else :key="i" router :to="item.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </template>
        </v-list>
    </v-navigation-drawer>

    <v-content>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
    <!-- <v-footer app>
        Footer
    </v-footer> -->
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
                icon: 'mdi-account',
                title: 'Über mich',
                route: 'about'
            },
            {
                icon: 'mdi-server-network',
                title: 'Netzwerke',
                route: 'network'
            },
            {
                divider: true
            },
            {
                icon: 'mdi-codepen',
                title: 'Frontend',
                route: 'frontend'
            },
            {
                icon: 'mdi-code-tags',
                title: 'Backend',
                route: 'backend'
            },
            {
                divider: true
            },
            {
                icon: 'mdi-wrench',
                title: 'Tools',
                route: 'tools'
            },
            {
                divider: true
            },
            {
                icon: 'mdi-image-filter',
                title: 'Gallery',
                route: 'gallery'
            },
            {
                icon: 'mdi-phone',
                title: 'Kontakt',
                route: 'contact'
            },
        ],
    }),
}
</script>

<style>
#keep .v-navigation-drawer__border {
    display: none;
}
</style>
