<template>
<v-container grid-list-md text-center>
    <v-card class="mx-auto" elevation="24">
        <v-img height="200px" src="img/support.jpg">
            <v-card-title class="align-center fill-height title-shadow display-4">Support und Hardware</v-card-title>
        </v-img>
        <v-card-text text-center>
            <h1 class="subtitle-1 text--primary text-start pb-2">Support und Hardware</h1>
            <p class="text-start">Hilfe für Enduser bei Problemen mit Microsoft Office, Windows oder Linux.</p>
            <p class="text-start">
                <ul>
                    <li>Administration von Windows Domaincontrollern</li>
                    <li>Onlinesupport mit Teamviewer</li>
                    <li>Umbau und Reparatur von PC-Hardware und Peripherie</li>
                    <li>Umbau von Servern (RAID-Controller)</li>
                </ul>
            </p>
            <!-- <div>
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
            </div> -->
        </v-card-text>
    </v-card>
</v-container>
</template>
<script>
export default {
    data() {
        return {
            skills: [
                // {
                //     title: "Firewall",
                //     level: 75
                // },
                // {
                //     title: "VPN",
                //     level: 89
                // }
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

