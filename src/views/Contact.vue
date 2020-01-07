<template>
  <v-card
    class="mx-auto"
    elevation="24"
  >
    <v-card-title class="title title-shadow text--primary text-center">
      So können Sie mich kontaktieren:
    </v-card-title>
    <v-card-text>
      <div class="text-center">
        <div>
          <v-btn
            class="ma-2 text-none"
            color="blue"
            href="tel:+491786608638"
          >
            Mobilephone: +49 178 660 86 38
            <v-icon right>
              mdi-phone
            </v-icon>
          </v-btn>
          <v-btn
            class="ma-2 text-none"
            color="red"
            href="mailto:michzuerch@gmail.com"
          >
            Email: &#109;&#105;&#099;&#104;&#122;&#117;&#101;&#114;&#099;&#104;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            <v-icon right>
              mdi-gmail
            </v-icon>
          </v-btn>
          <v-btn
            class="ma-2 text-none"
            color="green"
            href="skype:michzuerch?call"
          >
            Skype: michzuerch
            <v-icon right>
              mdi-skype
            </v-icon>
          </v-btn>
        </div>
      </div>
      <v-card
        elevation="24"
        color="grey darken-2"
        class="mt-3"
      >
        <v-card-title class="text--primary">
          Postadresse
        </v-card-title>
        <v-card-text>
          Athleticsfood Grenzpaket<br>
          Michael Zürcher (124144)<br>
          Freiheitstr. 49<br>
          D-78224 Singen<br>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}
</style>
