<template>
<v-container grid-list-md text-center>
      <v-card class="pa3 ma3">
        <v-layout row wrap>
          <v-flex xs12 md6>Card</v-flex>
        </v-layout>
      </v-card>
    <v-layout wrap fill-height>
        <v-flex xs12 md6>
            <v-card dark color="primary">
                <v-card-text class="px-0">About</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 md6>
            <v-btn outlined block>Button</v-btn>
        </v-flex>
        <v-flex>
          <div class="">
            <v-chip>i am a chip</v-chip>
          </div>
        </v-flex>
    </v-layout>

</v-container>
</template>
