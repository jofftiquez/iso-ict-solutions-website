<template lang="pug">
  v-content
    v-toolbar(
      app
      flat
      absolute
      color="transparent"
      width="100%"
    )
      h1.white--text ISO: ICT Solutions
      v-spacer
      v-btn(depressed large text color="white").ma-1 The Company
      v-btn(depressed large text color="white").ma-1 Services
      v-btn(depressed large text color="white").ma-1 Contact Us
    v-container(fluid style="height: 100vh").fill-height.panel-1
      v-row(justify="center" align="center")
        v-col(cols="12")
          v-card(flat color="transparent")
            v-card-text.text-center
              h1.black--text.display-3.font-weight-black Innovative Smart Options: ICT Solutions
              br
              h2.black--text.display-2 Works for you!
            v-card-text.text-center
              v-btn(icon large).primary
                v-icon(style="font-size: 50px").white--text mdi-chevron-down
    v-container(style="height: 100vh").fill-height
      v-row(justify="center" align="center")
        v-col(cols="12" md="4").text-center.pa-10
          img(width="100%" src="../assets/images/the-company.svg")
        v-col(cols="12" md="8").pa-10
          h1.primary--text The Company
          p Incididunt dolore commodo aliqua aliquip dolor dolor ullamco mollit reprehenderit proident commodo et sunt sunt. Quis do ea labore consequat ut irure qui. Veniam ullamco ut sint deserunt do excepteur. Sint veniam mollit excepteur aliqua aute sint ex quis. Cillum qui nulla reprehenderit elit aliqua dolore officia dolore fugiat laboris nulla.
          p Eiusmod aute elit magna est. Nisi nostrud anim in velit. Sint cupidatat anim dolor id anim in et ut occaecat ea consequat. Non ipsum dolor adipisicing exercitation nostrud enim. Ullamco consectetur quis voluptate sunt mollit incididunt nulla sint.
    v-container(style="height: 100vh").fill-height
      v-row(justify="center" align="center")
        v-col(cols="12" md="8").pa-10
          h1.primary--text Range of Support Services
          p Incididunt dolore commodo aliqua aliquip dolor dolor ullamco mollit reprehenderit proident commodo et sunt sunt. Quis do ea labore consequat ut irure qui. Veniam ullamco ut sint deserunt do excepteur. Sint veniam mollit excepteur aliqua aute sint ex quis. Cillum qui nulla reprehenderit elit aliqua dolore officia dolore fugiat laboris nulla.
          ul
            li Consectetur labore velit occaecat aliqua proident mollit exercitation.
            li Culpa pariatur mollit est magna velit.
            li Magna id adipisicing consectetur fugiat culpa eiusmod.
        v-col(cols="12" md="4").text-center.pa-10
          img(width="300" src="../assets/images/our-services.svg")
    v-footer(height="auto" color="primary" dark)
      v-container
        v-row
          v-col
            h1 foo
</template>

<script>
import Sample from '~/components/sample';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Sample,
  },
  head () {
    return headMeta({
      title: 'Sample Web Page',
      description: 'A simple web page in this fresh setup.',
    });
  },
};
</script>

<style scoped>
.panel-1 {
  background-image: url('../assets/images/usp.jpg');
  background-position: center center;
  background-size: cover;
}
</style>
