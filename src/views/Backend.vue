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
        :src="background"
      >
        <v-card-title class="align-center fill-height title-shadow headline font-weight-bold">
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
          Unittesting mit JUnit 4 und TestNG. Versionkontolle mit Git.
        </p>
        <p class="text-start">
          Buildsystem Maven.
        </p>
      </v-card-text>
    </v-card>
    <section class="container content-section text-center">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <div id="skill-bar-wrapper">
            <h1>Skills</h1>
            <div class="text-left">
              <!-- Java 13 -->
              Java 13<span style="float:right;">100%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="100%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>

              <!-- J2EE -->
              J2EE (Wildfly)<span style="float:right;">100%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="100%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>

              <!-- Maven -->
              Maven<span style="float:right;">100%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="100%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>

              <!-- Vaadin -->
              Vaadin 14<span style="float:right;">95%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="95%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>

              <!-- Unittesting -->
              JUnit 4 / TestNG<span style="float:right;">75%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="75%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>

              <!-- Apache XML:FO Reporting -->
              Apache XML:FO Reporting<span style="float:right;">85%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="85%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>
              Jasper Reports<span style="float:right;">95%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="95%"
              >
                <div
                  class="skills"
                  style="background: white;"
                />
              </div>
              Spring Boot 2.2.2 / Spring Data<span style="float:right;">95%</span>
              <div
                class="skillbar-container clearfix"
                data-percent="95%"
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
    </section>
  </v-container>
</template>
<script>
import $ from 'jquery'

export default {
  name: 'Backend',
  data () {
    return {
      background: require('../assets/backend.jpg') // eslint-disable-line no-undef
    }
  },
  mounted () {
    $(window).scroll(function () {
      var hT = $('#skill-bar-wrapper').offset().top
      var hH = $('#skill-bar-wrapper').outerHeight()
      var wH = $(window).height()
      var wS = $(this).scrollTop()
      if (wS > (hT + hH - 1.4 * wH)) {
        $(document).ready(function () {
          $('.skillbar-container').each(function () {
            $(this).find('.skills').animate({
              width: $(this).attr('data-percent')
            }, 5000) // 5 seconds
          })
        })
      }
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
