<template lang="pug">
  div
    v-toolbar(
      flat
      absolute
      color="transparent"
      width="100%"
    )
      template(v-if="!$isMobile")
        //- h1.white--text ISO ICT Solutions
        v-btn(href="#the-company" depressed text color="white").ma-1 The Company
        v-btn(href="#the-team" depressed text color="white").ma-1 The Team
        v-btn(href="#services" depressed text color="white").ma-1 Services
        v-spacer
        v-btn(@click="toggleChat" depressed color="primary").ma-1 Contact Us
      template(v-else)
        v-spacer
        v-btn(icon @click="drawer = !drawer")
          v-icon(style="font-size: 40px").white--text mdi-menu
    v-navigation-drawer(
      v-model="drawer"
      absolute
      temporary
    )
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
    };
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>
