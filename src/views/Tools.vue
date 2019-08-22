<template>
<v-container grid-list-xl>
    <v-layout row justify-space-between>
        <v-flex md3>
            <v-card class="ma-2">
                <v-card-title>Virtualisierung</v-card-title>
                <v-card-text>
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="ma-2" :elevation="hover ? 24 : 2">
                            <v-img src="img/tools/docker.jpg" height="200"></v-img>
                            <v-card-text>
                                <h1>Docker</h1>
                                <p>Virtualisierung</p>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="ma-2" :elevation="hover ? 24 : 2">
                            <v-img src="img/tools/openshift.jpg" height="200"></v-img>
                            <v-card-text>
                                <h1>Openshift</h1>
                                <p>Virtualisierung</p>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-card-text>

                <v-card class="ma-2">
                    <v-card-title>Webdesign</v-card-title>
                    <v-card-text>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/html5css3.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Html 5 / CSS 3</h1>
                                    <p>Webdesign</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/vue.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Vue JS</h1>
                                    <p class="pt-1">Javascript Framework</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/bulma.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Bulma</h1>
                                    <p>CSS3-Framework</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/tailwind.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Tailwind CSS</h1>
                                    <p class="pt-1">CSS Framework</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-card-text>
                </v-card>

                <v-card class="ma-2">
                    <v-card-title>Programmierung</v-card-title>
                    <v-card-text>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/intellij.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>IntelliJ </h1>
                                    <p>IDE Java</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/java.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Java 12</h1>
                                    <p>Programmierung</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/maven.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Maven</h1>
                                    <p>Buildtool</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/spring-boot.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Spring Boot</h1>
                                    <p class="pt-1">Java Framework</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="ma-2" :elevation="hover ? 24 : 2">
                                <v-img src="img/tools/javascript.jpg" height="200"></v-img>
                                <v-card-text>
                                    <h1>Javascript</h1>
                                    <p class="pt-1">Frontend Programming</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-card-text>
                </v-card>
            </v-card>
    </v-layout>
</v-container>
</template>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
