<template lang="pug">
  v-carousel(
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="100vh"
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
              v-card-text.text-center
                h1.white--text.display-3.font-weight-black Innovative Smart Options:
                  br
                  | ICT Solutions
                br
                br
                h2.white--text.display-2 Works for you!
              v-card-text.text-center
                v-btn(icon large).primary
                  v-icon(style="font-size: 50px").white--text mdi-chevron-down
  //- v-container(fluid style="height: 100vh").fill-height.panel-1
    v-row(justify="center" align="center")
      v-col(cols="12")
        v-card(flat color="transparent")
          v-card-text.text-center
            h1.black--text.display-3.font-weight-black Innovative Smart Options: ICT Solutions
            br
            h2.black--text.display-2 Works for you! {{$isMobile}}
          v-card-text.text-center
            v-btn(icon large).primary
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
      ],
    };
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
