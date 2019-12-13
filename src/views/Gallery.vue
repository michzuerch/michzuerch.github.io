<template>
  <v-container
    grid-list-md
    grid-list-lg
    grid-list-xl
  >
    <v-card
      class="mx-auto"
      elevation="24"
    >
      <v-carousel
        :cycle="cycle"
        :interval="interval"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="img/Avatar2018.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Michael Zürcher</v-list-item-title>
            <v-list-item-subtitle>Programmierer und IT-Experte</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cycle: true,
      interval: 3000,
      items: [{
        src: 'img/gallery/Portrait1-cut.jpg'
      },
      {
        src: 'img/gallery/Portrait2-cut.jpg'
      },
      {
        src: 'img/gallery/Portrait3-cut.jpg'
      },
      {
        src: 'img/gallery/Car1-cut.jpg'
      },
      {
        src: 'img/gallery/Car2-cut.jpg'
      },
      {
        src: 'img/gallery/Car3-cut.jpg'
      }
      ]
    }
  }
}
</script>
<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
