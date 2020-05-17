<template lang="pug">
  v-content
    iso-toolbar
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
    v-container(id="the-company")
      v-row(justify="center" align="center").pa-10
        v-col(cols="12" md="6").text-center.pa-10
          img(:width="$isMobile ? '100%' : '350'" src="../assets/images/the-company.svg")
        v-col(cols="12" md="6").pa-10
          h1.primary--text The Company
          p Innovative Smart Options: ICT Solutions acts as your back office and reliable business partner available 24/7 via online means. Our highly trained, certified and well-experienced professionals will work and prepare any phase or phases of your project scope. ISO: ICT Solutions helps you save time and cost using an entirely new approach.
          p Challenging times demand innovative strategies in all aspects of activities from project pre-sales preparation, requirement review, development, deployment, monitoring, and completion to post-project services delivery.
          p We understand your financial and social constraints in organizing your team and we further support your commitment to a successful project hand-over.
    v-container(id="the-team")
      v-row(justify="center" align="center").pa-10
        v-col(cols="12" md="6").pa-10
          h1.primary--text The Team
          p A group of highly experienced and technically knowledgeable professionals conceptualized the idea of supporting ICT companies who had been affected by this “new normal” business environment.
          p Innovative Smart Options: ICT Solutions offers help to those organizations who had downsized their teams, those on start up or even existing companies who opted to outsource the services of ICT consultants.
        v-col(cols="12" md="6").text-center.pa-10
          img(:width="$isMobile ? '100%' : '300'" src="../assets/images/the-team.svg")
    v-container(id="services")
      v-row(justify="center" align="center").pa-10
        v-col(cols="12").text-center.pa-10
          img(width="200" src="../assets/images/our-services.svg")
          h1.primary--text Range of Support Services
        v-col(cols="12" md="10")
          v-card
            v-card-text
              h3.primary--text Consultancy Services: BICSI certified Professionals
              ul
                li RCDD (Registered Communications Distribution Designer)
                li DCDC (Data Center Design Consultant)
                li OSP (Outside Plant Designer)
        v-col(cols="12" md="10")
          v-card
            v-card-text
              h3.primary--text Pre-sales Preparation
              ul
                li BOQ (Bill of Quantity)
                  ul
                    li Review of project specifications
                    li RFI (Request for Information)
                    li Costing Sheets
                li Design Preparation
                  ul
                    li Schematic Drawings
                    li Detailed Design
                    li Issued-for-Construction Drawings
                    li Shop Drawings
                    li Redline Mark-ups
                    li As-built Drawings
                    li Resubmissions of layouts
                li Documentation
                  ul
                    li Weekly Accomplishment Reports/Project Planning
                    li Technical Submittals
                    li Method Statements
                    li Project Execution RFIs
                    li Labeling Schemes
                    li Mock-up
                    li Operation and Maintenance Manual
                li Construction Phase
                  ul
                    li Quality Control
                    li Site validation
                    li Team deployment for:
                      ol
                        li Installation
                        li Testing
                li Acceptance Phase
                  ul
                    li Documentation Submittals
        v-col(cols="12" md="10")
          v-card
            v-card-text
              h3.primary--text Range of Systems
              ul
                li Structured Cabling Systems, facilities for
                  ul
                    li Residential
                    li Business
                    li Mixed-Use
                    li Hospital
                    li Maritime
                    li Military
                    li Airport
                    li Tunnel
                    li Railroad
                    li Warehouses
                    li Parking Areas
                    li Others
                li Data Center Cabling and Containment, OSP Projects, Security Systems
                  ul
                    li CCTV and various applications
                    li Access Control
                    li Public Address
                    li Audio-Visual
                li Fire Detection and Alarm
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
import headMeta from '~/utils/head-meta';
export default {
  components: {
    IsoToolbar,
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
