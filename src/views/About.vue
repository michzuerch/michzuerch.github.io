<template>
<v-card class="mx-auto" elevation="24">
    <v-img height="260px" src="img/Background1lg.jpg">
        <v-card-title class="align-center fill-height">
            <v-container>
                <v-row>
                    <v-col>
                        <h1 class="animated zoomIn display-2 font-weight-black title-shadow">Michael Zürcher</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h2 class="animated zoomIn headline font-weight-medium title-shadow">Programmierer und IT-Experte</h2>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-title>
    </v-img>
    <v-card-text>
        <h1 class="title text-start pb-3">Hallo mein Name ist Michael Zürcher...</h1>
        <p class="text-start">Als <strong>Java</strong>-Programmierer habe ich mehr als 10 Jahren Erfahrung mit der Entwicklung von Internet-L&ouml;sungen mit Java.
            Meistens mit <strong>Linux</strong> und <strong>Java EE</strong>, neuerdings auch mit <strong>Spring-Boot</strong>
            und&nbsp;<strong>Docker</strong>.
        </p>
        <p class="text-start">In den letzten Jahren hatte ich es mit verschiedenen Java-Frameworks zur Webprogrammierung zu tun:
            Zuerst JSP (Java Server Pages), dann Apache Struts, Java Server Faces und zuletzt
            <strong>Vaadin</strong>.
        </p>
        <p class="text-start">Weiterhin arbeite ich nun vermehrt mit Virtualisierungstechniken:
            <strong> Docker, Openshift</strong> &nbsp;und&nbsp; <strong>Kubernetes</strong>.
        </p>
        <div class="text-center">
            <v-btn large rounded color="primary" href='https://docs.google.com/document/d/1i_CY7K3zurwM_MqIE1sVN10oH2jcFhQeHKpp1XJQKS0/edit?usp=sharing' target='_blank'>Download CV
                <v-icon dark class="pl-3">mdi-cloud-download</v-icon>
            </v-btn>

        </div>
    </v-card-text>
</v-card>
</template>

<script>
export default {}
</script>

<style scoped>
.title-shadow {
    text-shadow: 3px 3px 25px #000;
}
</style>
