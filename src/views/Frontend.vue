<template>
<v-container grid-list-md text-center>
    <v-card class="mx-auto" elevation="24">
        <v-img height="200px" src="img/programming.jpg">
            <v-card-title class="align-center fill-height title-shadow">Frontend</v-card-title>
        </v-img>
        <v-card-text text-center>
            <h1 class="subtitle-1">Programmierung von Frontends mit Javascript/Vaadin</h1>
            <p class="text-start">Progralaksdfklöasdjfaslödfkj</p>
            <p class="text-start">
                <ul>
                    <li>Javacode für Vaadin</li>
                    <li>Javascript-Code für Vuee3</li>
                </ul>
            </p>
            <div class="text-start">
                <h1 class="subtitle-2">Skills</h1>
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
    data: () => ({
        skills: [{
                title: "Java",
                initlevel: 0,
                level: 75
            },
            {
                title: "Vaadin",
                initlevel: 50,
                level: 89
            }
        ],
    }),
}
</script>

<style>

</style>
