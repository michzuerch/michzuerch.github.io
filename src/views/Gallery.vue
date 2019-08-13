<template>
<v-container grid-list-md text-center>
    <v-card elevation="24">
        <v-carousel :cycle="cycle" :interval="interval">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <v-list two-line>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="img/Avatar2018.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Michael Zürcher</v-list-item-title>
                    <v-list-item-subtitle>Author</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            cycle: true,
            interval: 10000,
            items: [{
                    src: 'img/gallery/Portrait1-cut.jpg',
                },
                {
                    src: 'img/gallery/Portrait2-cut.jpg',
                },
                {
                    src: 'img/gallery/Portrait3-cut.jpg',
                },
                {
                    src: 'img/gallery/Car1-cut.jpg',
                },
                {
                    src: 'img/gallery/Car2-cut.jpg',
                },
                {
                    src: 'img/gallery/Car3-cut.jpg',
                },
            ],
        }
    },
}
</script>
