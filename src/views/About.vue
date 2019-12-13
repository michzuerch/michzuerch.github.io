<template>
  <v-card
    class="mx-auto"
    elevation="24"
  >
    <v-img
      :src="background"
    >
      <v-card-title class="align-center fill-height">
        <v-container>
          <v-row>
            <v-col>
              <h1 class="animated zoomIn title font-weight-bold title-shadow">
                Michael Zürcher
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2 class="animated zoomIn subtitle-1 font-weight-medium title-shadow">
                Programmierer und IT-Experte
              </h2>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
    </v-img>
    <v-card-text>
      <h1 class="title text-start pb-3">
        Hallo mein Name ist Michael Zürcher...
      </h1>
      <p class="text-start">
        Als <strong>Java</strong>-Programmierer habe ich mehr als 10 Jahren Erfahrung mit der Entwicklung von Internet-L&ouml;sungen mit Java.
        Meistens mit <strong>Linux</strong> und <strong>Java EE</strong>, neuerdings auch mit <strong>Spring-Boot</strong>
        und&nbsp;<strong>Docker</strong>.
      </p>
      <p class="text-start">
        In den letzten Jahren hatte ich es mit verschiedenen Java-Frameworks zur Webprogrammierung zu tun:
        Zuerst JSP (Java Server Pages), dann Apache Struts, Java Server Faces und zuletzt
        <strong>Vaadin</strong>.
      </p>
      <p class="text-start">
        Weiterhin arbeite ich nun vermehrt mit Virtualisierungstechniken:
        <strong> Docker, Openshift</strong> &nbsp;und&nbsp; <strong>Kubernetes</strong>.
      </p>
      <div class="text-center pt-5">
        <v-btn
          large
          rounded
          color="primary"
          href="http://bit.ly/2o5G2JX"
          target="_blank"
        >
          Download CV
          <v-icon
            dark
            class="pl-3"
          >
            mdi-cloud-download
          </v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      background: require('../assets/about.jpg') // eslint-disable-line no-undef
    }
  }
}
</script>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
