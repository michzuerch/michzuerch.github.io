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
        src="img/frontend.jpg"
      >
        <v-card-title class="align-center fill-height title-shadow headline font-weight-bold">
          Frontend
        </v-card-title>
      </v-img>
      <v-card-text text-center>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Frontend Programmierung
        </h1>
        <p class="text-start">
          Moderne Web-Interfaces mit Javascript Vue oder Vaadin 14.
        </p>
        <p class="text-start">
          <ul>
            <li>Vaadin 14</li>
            <li>Vue / Vuetify</li>
            <li>Bulma</li>
            <li>Tailwind CSS</li>
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
        title: 'Java / Vaadin',
        level: 95
      },
      {
        title: 'Javascript',
        level: 35
      },
      {
        title: 'Bulma',
        level: 75
      },
      {
        title: 'Webpack',
        level: 45
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
