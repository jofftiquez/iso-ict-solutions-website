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
        h1.white--text Logo Here
        v-spacer
        v-btn(href="#the-company" depressed text color="white").ma-1 The Company
        v-btn(href="#the-team" depressed text color="white").ma-1 The Team
        v-btn(href="#services" depressed text color="white").ma-1 Services
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
      v-toolbar(flat).primary
        v-toolbar-title.white--text.font-weight-black Logo Here
      v-list(shaped)
        v-list-item(@click="" href="#the-company")
          v-list-item-icon
            v-icon mdi-domain
          v-list-item-content
            v-list-item-title The Company
        v-list-item(@click="" href="#the-team")
          v-list-item-icon
            v-icon mdi-account-group
          v-list-item-content
            v-list-item-title The Team
        v-list-item(@click="" href="#services")
          v-list-item-icon
            v-icon mdi-shape-outline
          v-list-item-content
            v-list-item-title Services
        v-list-item(@click="toggleChat(); drawer = !drawer")
          v-list-item-icon
            v-icon mdi-forum-outline
          v-list-item-content
            v-list-item-title Contact Us
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
