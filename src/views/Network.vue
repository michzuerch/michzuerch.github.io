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
        src="img/network.jpg"
      >
        <v-card-title class="align-center fill-height title-shadow display-4">
          Netzwerke
        </v-card-title>
      </v-img>
      <v-card-text text-center>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Installation und Fehlersuche
        </h1>
        <p class="text-start">
          Konzeption , Wartung und Fehlersuche
        </p>
        <p class="text-start">
          <ul>
            <li>LAN</li>
            <li>Router, Switches</li>
            <li>Firewalls, Loadbalancer</li>
            <li>Fileserver, NAS</li>
          </ul>
        </p>
        <div>
          <v-card
            elevation="24"
            color="grey darken-2"
          >
            <v-card-title>Skill Level</v-card-title>
            <v-card-text>
              <v-list
                dense
                color="grey darken-2"
              >
                <template v-for="(item, i) in skills">
                  <v-list-item :key="i">
                    <v-list-item-content>
                      <skill-bar
                        bar-size="small"
                        :skill="item.title"
                        :level="item.level"
                      />
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      skills: [{
        title: 'LAN, Router, Switches',
        level: 100
      },
      {
        title: 'Fileserver, NAS, Windows-Domains',
        level: 100
      },
      {
        title: 'Firewall, VPN (IPSec/PPTP)',
        level: 95
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
