<template lang="pug">
  div#top
    v-carousel(
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      :height="$isMobile ? 'auto' : '100vh'"
      reverse-transition="fade-transition"
      transition="fade-transition"
    )
      v-carousel-item(
        v-for="(item, key) in carouselItems"
        :src="item.src"
        :key="key"
      )
        v-sheet(
          height="100%"
          color="transparent"
          dark
        )
          v-row(
            class="fill-height"
            align="center"
            justify="center"
          )
            v-col(cols="12")
              v-card(flat color="transparent")
                v-card-text(:style="{ 'padding' : $isMobile ? '60px 5px 5px 5px' : '' }").text-center
                  h1.white--text.display-3.font-weight-black Innovative Smart Options:
                    br
                    | ICT Solutions
                  br
                  br
                  h2.white--text.display-2.font-weight-bold Innovate. Outsource. Deliver.
                v-card-text(:style="{ 'padding-bottom' : $isMobile ? '50px' : '' }").text-center
                  v-btn(href="#" icon large v-scroll-to="{ el: '#the-company', offset: scrollOffset }").primary
                    v-icon(style="font-size: 50px").white--text mdi-chevron-down
</template>

<script>
export default {
  data () {
    return {
      carouselItems: [
        {
          src: require('../../assets/images/usp-1.jpg'),
        },
        {
          src: require('../../assets/images/usp-2.jpg'),
        },
        {
          src: require('../../assets/images/usp-3.jpg'),
        },
        {
          src: require('../../assets/images/usp-4.jpg'),
        },
      ],
    };
  },
  computed: {
    scrollOffset () {
      return this.$isMobile ? -56 : -64;
    },
  },
};
</script>

<style scoped>
.panel-1 {
  background-image: url('../../assets/images/usp-1.jpg');
  background-position: center center;
  background-size: cover;
}
</style>
