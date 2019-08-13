<template>
<v-container grid-list-md text-center>
    <v-layout>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
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
