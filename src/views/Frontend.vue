<template>
  <v-container
    grid-list-md
    grid-list-lg
    grid-list-xl
  >
    <v-card
      class="mx-auto"
      elevation="24"
    >
      <v-img
        height="200px"
        :src="background"
      >
        <v-card-title class="fill-height title-shadow headline font-weight-bold">
          Frontend
        </v-card-title>
      </v-img>
      <v-card-text text-start>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Frontend Programmierung
        </h1>
        <p>
          Moderne Web-Interfaces mit Javascript Vue oder Vaadin 14. Webdesign mit CSS3 und den aktuellen Frameworks Tailwind und Bulma.
        </p>
        <div class="container content-section text-center">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div id="skill-bar-wrapper">
                <div class="subtitle-2 text--primary text-start">
                  Skill level
                </div>
                <div class="text-left">
                  <!-- Java / Vaadin 14 -->
                  Java / Vaadin 14<span style="float:right;">95%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="95%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- JavaScript / Vuetify -->
                  JavaScript / Vue / Vuetify<span style="float:right;">45%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="45%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- HTML / CSS3 -->
                  HTML / CSS3<span style="float:right;">85%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="85%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- Bulma -->
                  Bulma<span style="float:right;">75%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="75%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- Tailwind -->
                  Tailwind<span style="float:right;">55%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="55%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Frontend',
  data () {
    return {
      background: require('../assets/frontend.jpg') // eslint-disable-line no-undef
    }
  },
  mounted () {
    $(document).ready(function () {
      $('.skillbar-container').each(function () {
        $(this).find('.skills').animate({
          width: $(this).attr('data-percent')
        }, 5000) // 5 seconds
      })
    })
  }
}
</script>

<style scoped>
.title-shadow {
    text-shadow: 6px 3px 8px rgba(0, 0, 0, 0.66);
}

.skillbar-container {
  position:relative;
  display:block;
  margin-bottom: 15px;
  width: 100%;
  background-color: #666463;
  background-color: rgba(255,255,255,.1);
  height:35px;
  height:5px;
}

.skills {
  height:35px;
  height:5px;
  width:0px;
}
</style>
