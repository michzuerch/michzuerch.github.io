<template>
<v-container grid-list-md text-center>
    <v-card class="mx-auto" elevation="24">
        <v-img height="200px" src="img/internet.jpg">
            <v-card-title class="align-center fill-height title-shadow display-4">Internet</v-card-title>
        </v-img>
        <v-card-text text-center>
            <h1 class="subtitle-1 text--primary text-start pb-2">Hosting und Email</h1>
            <p class="text-start">Erfahrung beim Hosting von Internetseiten, Email-Domain und Applikationsservern (J2EE).</p>
            <p class="text-start">
                <ul>
                    <li>Java J2EE Applikationsserver (JBoss, Wildfly, Geronimo)</li>
                    <li>Webserver, Apache, Nginx</li>
                    <li>Email, SMTP, IMAP, POP, S/MIME, GPG</li>
                    <li>DNS (Zonefiles), Registrierung</li>
                    <li>CMS, Joomla, Wordpress</li>
                    <li>SSL/TLS Let´s Encrypt</li>
                </ul>
            </p>
            <div>
                <h1 class="subtitle-2 text--primary text-start pt-2">Skill-Level</h1>
                <v-list dense>
                    <template v-for="(item, i) in skills">
                        <v-list-item :key="i">
                            <v-list-item-content>
                                <skill-bar barSize="small" :skill="item.title" :level="item.level" />
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </div>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            skills: [{
                    title: "Java EE 7/8",
                    level: 100
                },
                {
                    title: "Webdesign (HTML/CSS3)",
                    level: 90
                },
                {
                    title: "Hosting Websites / Email / CMS Joomla, Wordpress",
                    level: 80
                },
                {
                    title: "DNS, Zonefiles",
                    level: 90
                },
                {
                    title: "SSL Let´s Encrypt",
                    level: 80
                },
            ],
        }
    },
}
</script>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
