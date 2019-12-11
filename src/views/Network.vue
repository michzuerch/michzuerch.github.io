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
          Netzwerke
        </v-card-title>
      </v-img>
      <v-card-text text-center>
        <h1 class="subtitle-1 text--primary text-start pb-2">
          Installation und Fehlersuche
        </h1>
        <p class="text-start">
          Konzeption , Wartung und Fehlersuche
        </p>
        <p class="text-start">
          <ul>
            <li>LAN</li>
            <li>Router, Switches</li>
            <li>Firewalls, Loadbalancer</li>
            <li>Fileserver, NAS</li>
          </ul>
        </p>
        <div class="container content-section text-center">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div id="skill-bar-wrapper">
                <div class="subtitle-2 text--primary text-start">
                  Skill level
                </div>
                <div class="text-left">
                  <!-- LAN -->
                  LAN, Router, Switches<span style="float:right;">100%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="100%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- Windows Server -->
                  Windows Domain, Exchange<span style="float:right;">90%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="90%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- Fileserver -->
                  Fileserver, NAS<span style="float:right;">90%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="90%"
                  >
                    <div
                      class="skills"
                      style="background: white;"
                    />
                  </div>

                  <!-- Firewall -->
                  Firewall, VPN, Loadbalancer<span style="float:right;">85%</span>
                  <div
                    class="skillbar-container clearfix"
                    data-percent="85%"
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
  name: 'Backend',
  data () {
    return {
      background: require('../assets/backend.jpg') // eslint-disable-line no-undef
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
