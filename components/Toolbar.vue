<template lang="pug">
  div
    v-app-bar(
      fixed
      :color="scrolled ? 'white' : 'transparent'"
      :dark="!scrolled"
      elevate-on-scroll
    )
      template(v-if="!$isMobile").red
        h1(v-scroll-to="{ el: '#top', offset: scrollOffset }").mr-2 Logo Here
        v-spacer
        v-btn(
          v-scroll-to="{ el: '#the-company', offset: scrollOffset }"
          href="#"
          depressed
          text
        ).ma-1 The Company
        v-btn(
          v-scroll-to="{ el: '#the-team', offset: scrollOffset }"
          href="#"
          depressed
          text
        ).ma-1 The Team
        v-btn(
          v-scroll-to="{ el: '#services', offset: scrollOffset }"
          href="#"
          depressed
          text
        ).ma-1 Services
        v-btn(@click="toggleChat" depressed color="primary").ma-1 Contact Us
      template(v-else)
        h1(v-scroll-to="{ el: '#top', offset: scrollOffset }").mr-2 Logo Here
        v-spacer
        v-menu(close-on-content-click)
          template(v-slot:activator="{ on }")
            v-btn(icon v-on="on")
              v-icon(style="font-size: 40px") mdi-menu
          v-list(shaped)
            v-list-item(@click="" v-scroll-to="{ el: '#top', offset: scrollOffset }")
              v-list-item-icon
                v-icon mdi-home
              v-list-item-content
                v-list-item-title Home
            v-list-item(@click="" v-scroll-to="{ el: '#the-company', offset: scrollOffset }")
              v-list-item-icon
                v-icon mdi-domain
              v-list-item-content
                v-list-item-title The Company
            v-list-item(@click="" v-scroll-to="{ el: '#the-team', offset: scrollOffset }")
              v-list-item-icon
                v-icon mdi-account-group
              v-list-item-content
                v-list-item-title The Team
            v-list-item(@click="" v-scroll-to="{ el: '#services', offset: scrollOffset }")
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
      scrolled: false,
    };
  },
  computed: {
    scrollOffset () {
      return this.$isMobile ? -56 : -64;
    },
  },
  created () {
    this.scrolled = process.browser && window.scrollY > 0; // eslint-disable-line
    process.browser && window.addEventListener('scroll', this.handleScroll); // eslint-disable-line
  },
  destroyed () {
    process.browser && window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrolled = process.browser && window.scrollY > 0;
    },
    toggleChat () {
      process.browser && window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>
