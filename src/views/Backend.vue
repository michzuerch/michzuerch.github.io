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
        src="img/backend.jpg"
      >
        <v-card-title class="align-center fill-height title-shadow display-4">
          Backend
        </v-card-title>
      </v-img>
      <v-card-text text-center>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Backend Programmierung
        </h1>
        <p class="text-start">
          Programmierung von Backend-Lösungen, REST-Services.
        </p>
        <p class="text-start">
          <ul>
            <li>Java 8/12</li>
            <li>Maven</li>
            <li>Vaadin 14</li>
            <li>JUnit 4 / TestNG</li>
            <li>Apache XML:FO</li>
            <li>Jasper Reports</li>
            <li>Spring Boot</li>
            <li>Spring Data</li>
            <li>J2EE Wildfly</li>
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
        title: 'Java',
        level: 100
      },
      {
        title: 'J2EE 7/8',
        level: 100
      },
      {
        title: 'Vaadin 14',
        level: 85
      },
      {
        title: 'Spring-Boot',
        level: 75
      },
      {
        title: 'Docker / Openshift',
        level: 50
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
