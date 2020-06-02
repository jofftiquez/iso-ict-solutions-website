<template lang="pug">
  v-content(v-if="!loading")
    iso-toolbar
    usp
    the-company
    the-team
    services
    v-footer(height="auto"  dark)
      v-container
        v-row(justify="center").pa-10
          v-col(xs="12" md="3")
            b.primary--text Sitemap
            ul.no-decoration-ul
              li
                a(href="#the-company") The Company
              li
                a(href="#the-team") The Team
              li
                a(href="#services") Services
          v-col(xs="12" md="3")
            b.primary--text Follow Us
            ul.no-decoration-ul
              li
                a Facebook
              li
                a Twitter
          v-col(xs="12" md="3")
            b.primary--text Contact Us
            ul.no-decoration-ul
              li email@sample.com
              li +639165008232
              li
                a(@click="toggleChat") Live Chat
        v-row(justify="center")
          v-col(cols="12").text-center
            p Copyright © {{new Date().getFullYear()}} #[span.font-weight-black.primary--text Innovative Smart Options: ICT Solutions]. All Rights Reserved.
</template>

<script>
import IsoToolbar from '~/components/Toolbar';
import Usp from '~/components/home/Usp';
import TheCompany from '~/components/home/TheCompany';
import TheTeam from '~/components/home/TheTeam';
import Services from '~/components/home/Services';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    IsoToolbar,
    Usp,
    TheCompany,
    TheTeam,
    Services,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
  head () {
    return headMeta({
      title: 'Innovative Smart Options: ICT Solutions',
      description: 'Innovative Smart Options: ICT Solutions',
      socialBanner: require('../assets/images/usp-1.jpg'),
    });
  },
};
</script>

<style scoped>
.no-decoration-ul {
  list-style: none;
  padding-left: 0;
}

a {
  color: white;
}

a:hover {
  color: #009688;
}
</style>
