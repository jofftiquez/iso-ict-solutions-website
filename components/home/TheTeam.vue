<template lang="pug">
  v-container(id="the-team").mb-10.pt-0
    v-row
      v-col.text-center
        h1(:class="{ 'display-3': !$isMobile, 'display-2': $isMobile }").display-4.font-weight-black You Outsource
        h2.primary--text Our Team
      v-carousel(
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        height="500"
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
              v-col(cols="12" sm="10")
                v-card(flat color="transparent")
                  v-card-text.text-center
                    p.text-justify.white--text.headline {{item.content}}
</template>

<script>
export default {
  data () {
    return {
      carouselItems: [
        {
          src: require('../../assets/images/the-team-1.jpg'),
          content: 'A group of highly experienced and technically knowledgeable professionals conceptualized the idea of supporting ICT companies who had been affected by this “new normal” business environment. Projects across the Middle East demand strict compliance with international standards and the work experiences acquired harness the credibility of our ability to supply know-how.',
        },
        {
          src: require('../../assets/images/the-team-2.jpg'),
          content: 'Innovative Smart Options: ICT Solutions extends service to those organizations who had downsized their teams, those on start-up, and even existing companies who opted to outsource the services of ICT consultants.',
        },
      ],
    };
  },
};
</script>
