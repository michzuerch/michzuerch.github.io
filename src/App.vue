<template>
<v-app id="michzuerch">
    <v-app-bar app clipped-left :collapse-on-scroll="collapseOnScroll">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="title ml-3 mr-5">
            Michael Zürcher&nbsp;
            <!-- <span class="font-weight-light">Programmierer und IT-Experte</span> -->
        </span>
        <v-spacer></v-spacer>
        <span>
            <v-img src="img/button.svg" aspect-ratio="1" width="40" alt="button"></v-img>
        </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
        <v-row justify="space-around" class="pa-4">
            <v-avatar size="100">
                <img src="img/Avatar2019.jpg" alt="avatar" />
            </v-avatar>
        </v-row>
        <v-list dense>
            <template v-for="(item, i) in items">
                <v-layout v-if="item.heading" :key="i" align-center>
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                    </v-flex>
                </v-layout>
                <v-divider v-else-if="item.divider" :key="i" class="my-4"></v-divider>
                <v-list-item v-else v-show='!(location=="Switzerland" && item.noSwitzerland)' :key="i" router :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
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
</v-app>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        drawer: null,
        location: [],
        collapseOnScroll: true,
        items: [{
                icon: "mdi-account",
                title: "Über mich",
                route: "about",
                noSwitzerland: false
            },
            {
                divider: true
            },
            {
                icon: "mdi-server-network",
                title: "Netzwerke",
                route: "network",
                noSwitzerland: false
            },
            {
                icon: "mdi-laptop",
                title: "Support",
                route: "support",
                noSwitzerland: false
            },
            {
                icon: "mdi-web",
                title: "Internet",
                route: "internet",
                noSwitzerland: false
            },
            {
                divider: true
            },
            {
                icon: "mdi-codepen",
                title: "Frontend",
                route: "frontend",
                noSwitzerland: false
            },
            {
                icon: "mdi-code-tags",
                title: "Backend",
                route: "backend",
                noSwitzerland: false
            },
            {
                divider: true
            },
            {
                icon: "mdi-wrench",
                title: "Tools",
                route: "tools",
                noSwitzerland: false
            },
            {
                icon: "mdi-github-box",
                title: "Codesamples",
                route: "github",
                noSwitzerland: false
            },
            {
                divider: true
            },
            {
                icon: "mdi-image-filter",
                title: "Gallery",
                route: "gallery",
                noSwitzerland: false
            },
            {
                icon: "mdi-phone",
                title: "Kontakt",
                route: "contact",
                noSwitzerland: true
            }
        ]
    }),
    mounted() {
        this.getLocation()
    },
    methods: {
        async getLocation() {
            fetch('https://extreme-ip-lookup.com/json')
                .then(res => res.json())
                .then(response => {
                    this.location = response.country;
                    console.log("Country:", this.location)
                })
                .catch((data, status) => {
                    console.log('Request failed:', data, status);
                });
        }
    },
};
</script>

<style>
#keep .v-navigation-drawer__border {
    display: none;
}
</style>
