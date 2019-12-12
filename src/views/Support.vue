<template>
  <v-container
    grid-list-md
    text-center
  >
    <v-card
      class="mx-auto"
      elevation="24"
    >
      <v-img
        height="200px"
        :src="background"
      >
        <v-card-title class="align-center fill-height title-shadow headline font-weight-bold">
          Support und Hardware
        </v-card-title>
      </v-img>
      <v-card-text text-start>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Support und Hardware
        </h1>
        <p>
          Hilfe für Enduser bei Problemen mit Microsoft Office, Windows oder Linux.
        </p>
        <p>
          <ul>
            <li>Administration von Windows Domaincontrollern</li>
            <li>Onlinesupport mit Teamviewer</li>
            <li>Umbau und Reparatur von PC-Hardware und Peripherie</li>
            <li>Umbau von Servern (RAID-Controller)</li>
          </ul>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      background: require('../assets/support.jpg'), // eslint-disable-line no-undef
      skills: [{
        title: 'Windows 10 / Office',
        level: 90
      },
      {
        title: 'Windows Server / Exchange Server',
        level: 90
      },
      {
        title: 'Linux',
        level: 100
      }]
    }
  }
}
</script>
<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
