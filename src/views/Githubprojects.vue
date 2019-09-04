<template>
<v-container fluid>
    <v-layout row wrap justify-space-between>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/Anouman.jpg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">Anouman</v-card-title>
                </v-img>
                <v-card-text>
                    <h2 class="text-start subtitle-2 mb-2">J2EE Applikation für Wildfly</h2>
                    <h3 class="subtitle-3 mb-1">Funktionsumfang</h3>
                    <p class="text-start">CRM, Adressen, Rechnungen, Artikelstamm, Buchhaltung, Reports.</p>
                    <h3 class="subtitle-3 mb-1">Technologien</h3>
                    <ul>
                        <li>Java</li>
                        <li>Wildfly</li>
                        <li>Vaadin</li>
                        <li>Postgresql</li>
                        <li>Apache FOP</li>
                        <li>Jasperreports</li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                        <v-btn small rounded color="primary" href='https://github.com/michzuerch/Anouman' target='_blank' class="text-none">Anouman
                            <v-icon dark class="pl-3">mdi-github-box</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/LocateIPAddress.jpg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">LocateIPAddress</v-card-title>
                </v-img>
                <v-card-text>
                    <h2 class="text-start subtitle-2 mb-2">Java-Applikation mit Spring-Boot</h2>
                    <h3 class="subtitle-3 mb-1">Funktionsumfang</h3>
                    <p class="text-start">Suchen in Locations nach IP-Adressen, Import von grossen Dateien.</p>
                    <h3 class="subtitle-3 mb-1">Technologien</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring-Boot</li>
                        <li>Vaadin</li>
                        <li>MongoDB</li>
                        <li>Docker</li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                        <v-btn small rounded color="primary" href='https://github.com/michzuerch/LocateIPAddress' target='_blank' class="text-none">LocateIPAddress
                            <v-icon dark class="pl-3">mdi-github-box</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 md4>
            <v-card elevation="24" class="ma-2 fill-height">
                <v-img src="img/TeachersAssistant.jpg" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title class="fill-height align-end subtitle-1">TeachersAssistant</v-card-title>
                </v-img>
                <v-card-text>
                    <h2 class="text-start subtitle-2 mb-2">J2EE Applikation für Wildfly</h2>
                    <h3 class="subtitle-3 mb-1">Funktionsumfang</h3>
                    <p class="text-start">Verwalten von Schulungsräumen, Lehrern, Schülern, Stundenplänen.</p>
                    <h3 class="subtitle-3 mb-1">Technologien</h3>
                    <ul>
                        <li>Java</li>
                        <li>Vaadin</li>
                        <li>Spring-Boot</li>
                        <li>Apache FOP</li>
                        <li>Jasperreports</li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                    <v-btn small rounded color="primary" href='https://github.com/michzuerch/TeachersAssistant' target='_blank' class="text-none">TeachersAssistant
                        <v-icon dark class="pl-3">mdi-github-box</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
