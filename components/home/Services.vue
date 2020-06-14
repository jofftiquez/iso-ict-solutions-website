<template lang="pug">
  div
    v-container(id="services")
      v-row(justify="center" align="center")
        v-col(cols="12").text-center
          h1(:class="{ 'display-3': !$isMobile, 'display-2': $isMobile }").display-4.black--text.font-weight-black We Deliver
          h2.primary--text Our Services
      v-row(justify="center" align="center" v-if="!$isMobile")
        v-col(cols="12")
          v-card(height="100%" flat).service-card
            v-toolbar.white.elevation-0
              v-spacer
              v-toolbar-title.font-weight-black.primary--text Support Requirements
              v-spacer
            v-tabs(v-model="rangeOfSupportServicesModel" :vertical="!$isMobile")
              template(v-for="(item, index) in rangeOfSupportServices")
                div(style="width: 300px")
                  div(
                    v-ripple
                    :style="{'padding-top': index !== 0 ? '10px' : ''}"
                    :class="{ active: rangeOfSupportServicesModel === index }"
                    @click="rangeOfSupportServicesModel = index"
                  ).custom-tab-btn
                    span(v-html="item.tab")
              v-tabs-items(v-model="rangeOfSupportServicesModel" :vertical="!$isMobile")
                template(v-for="(item, index) in rangeOfSupportServices")
                  v-tab-item(:value="index").pr-2.pb-2
                    v-card(flat height="100%").grey.lighten-3
                      v-card-text
                        h2(v-html="item.tab").mb-3
                        div(v-html="item.content")
        v-col(cols="12")
          v-card(height="100%" flat).service-card
            v-toolbar.white.elevation-0
              v-spacer
              v-toolbar-title.font-weight-black.primary--text Systems
              v-spacer
            v-tabs(v-model="rangeOfSystemsModel" :vertical="!$isMobile")
              template(v-for="(item, index) in rangeOfSystems")
                div(style="width: 300px")
                  div(
                    v-ripple
                    :style="{'padding-top': index !== 0 ? '10px' : ''}"
                    :class="{ active: rangeOfSystemsModel === index }"
                    @click="rangeOfSystemsModel = index"
                  ).custom-tab-btn
                    span(v-html="item.tab")
              v-tabs-items(v-model="rangeOfSystemsModel" :vertical="!$isMobile")
                template(v-for="(item, index) in rangeOfSystems")
                  v-tab-item(:value="index").pr-2.pb-2
                    v-card(flat height="100%").grey.lighten-3
                      v-card-text
                        h2(v-html="item.tab").mb-3
                        div(v-html="item.content")
      v-row(justify="center" align="center" v-else).ma-1
        v-col(cols="12").mb-4.service-card
          v-toolbar.mb-2.elevation-0
            v-toolbar-title.font-weight-black.primary--text Range of Support Services
          v-expansion-panels
            v-expansion-panel(v-for="(item, key) in rangeOfSupportServices" :key="key")
              v-expansion-panel-header(v-html="item.tab")
              v-expansion-panel-content
                v-card(flat height="100%").grey.lighten-3
                  v-card-text
                    div(v-html="item.content")
        v-col(cols="12").service-card
          v-toolbar.mb-2.elevation-0
            v-toolbar-title.font-weight-black.primary--text Range of Systems
          v-expansion-panels
            v-expansion-panel(v-for="(item, key) in rangeOfSystems" :key="key")
              v-expansion-panel-header(v-html="item.tab")
              v-expansion-panel-content
                v-card(flat height="100%").grey.lighten-3
                  v-card-text
                    div(v-html="item.content")
</template>

<script>
export default {
  data () {
    return {
      rangeOfSupportServicesModel: 0,
      rangeOfSystemsModel: 0,
      rangeOfSupportServices: [
        {
          tab: 'Consultancy Services BICSI certified <br> Professionals',
          content: `
            <p style="text-align: justify;">
              Never start an ICT project without seeking professional advice.  Costly re-works and damaged reputation can be avoided when BICSI certified professionals thoroughly review your information and communications technology (ICT) designs. The location of the telecom room or the route of the secondary pathway may contribute to the total failure of installed communication infrastructure. The cost of professional services will be nothing when compared to required re-work costs.
            </p>
            <p style="text-align: justify;">
              BICSI (Building Industry Consulting Service International) with headquarters location in Tampa, Florida, U.S.A. issues globally recognized credential to professionals who had passed their certification processes. These certified professionals are your partners in delivering successful world class ICT projects. ISO: ICT Solutions offers the services of:
            </p>
            <ul>
              <li>RCDD (Registered Communications Distribution Designer)</li>
              <li>DCDC (Data Center Design Consultant)</li>
              <li>OSP (Outside Plant Designer)</li>
              <li>Team coaching</li>
            </ul>
          `,
        },
        {
          tab: 'Pre-sales Preparation',
          content: `
            <p style="text-align: justify;">
              Project BOQ is very critical in project execution. The total fiber optic cable lengths must include required slacks and allowance to facilitate termination and future moves and changes. All components must be performed as expected and fully compliant with project specifications.
            </p>
            <p style="text-align: justify;">
              All gray areas in project requirement must be appropriately raised. Project owners expect that they are dealing with professionals who squarely understood the project.
            </p>
            <p style="text-align: justify;">
              A well-documented pre-sales preparation eliminates confusions during the transfer of information to the project team. ISO: ICT Solutions prepares your:
            </p>
            <ul>
              <li>BOQ (Bill of Quantity)</li>
              <li>Review of project specifications</li>
              <li>RFI (Request for Information)</li>
              <li>Costing Sheets</li>
            </ul>
          `,
        },
        {
          tab: 'Design Preparation ',
          content: `
            <p style="text-align: justify;">
              Design guides installation phase. There are different layout preparations, and each serve on separately during the execution works. The shop drawings, for example, should demonstrate how project team must install the system.
            </p>
            <p style="text-align: justify;">
              Approvals on submitted layouts will not relieve the construction team from the responsibility of improper installations.  It is therefore essential that prepared drawings are properly prepared and reviewed by certified professionals. To avoid confusion between the design and the installation team, ISO: ICT solutions makes the drawing plans for you.
            </p>
            <ul>
              <li>Schematic Drawings</li>
              <li>Detailed Design</li>
              <li>Issued-for-Construction Drawings</li>
              <li>Shop Drawings</li>
              <li>Redline Mark-ups</li>
              <li>As-built Drawings</li>
              <li>Resubmissions of layouts</li>
            </ul>
          `,
        },
        {
          tab: 'Documentation',
          content: `
            <p style="text-align: justify;">
              Proper documentation seamlessly transfers information among all team players in the project. Project accomplishments, progress, challenges, resolutions and change orders will guide the overall project delivery performance evaluation and valuable references when resolving disputes. Good documentation eases the pressure when working with future project requirements with the readily available sources of information.  ISO: ICT Solutions assist documenting:
            </p>
            <ul>
              <li>Weekly Accomplishment Reports/Project Planning</li>
              <li>Technical Submittals/Method Statements</li>
              <li>Project Execution RFIs</li>
              <li>Labeling Schemes</li>
              <li>Mock-up</li>
              <li>Change orders</li>
              <li>Operation and Maintenance Manual</li>
            </ul>
          `,
        },
        {
          tab: 'Construction Phase',
          content: `
            <p style="text-align: justify;">
              On-site project participation ensures “no re-work” policy.  A close monitoring of installation works through teleconferencing quickly resolves urgent issues requiring professionals’ inputs. ISO: ICT Solutions can be your virtual team member to perform:
            </p>
            <ul>
              <li>Quality Control</li>
              <li>Site validation</li>
              <li>
                Physical Team deployment (upon request) for:
                <ul>
                  <li>Installation</li>
                  <li>Testing</li>
                </ul>
              </li>
            </ul>
          `,
        },
        {
          tab: 'Acceptance Phase',
          content: `
            <p style="text-align: justify;">
              Project requirements define required submittals during the acceptance phase. The requirement maybe on project’s case to case basis, ISO: ICT Solution commits these:
            </p>
            <ul>
              <li>Documentation submittals</li>
            </ul>
          `,
        },
      ],
      rangeOfSystems: [
        {
          tab: 'Structured Cabling Systems',
          content: `
            <p style="text-align: justify;">
              Globally accepted technology standards and industry’s practices guarantee the design and installation of cables to any device connected at the endpoint will work with the system’s designed active devices located inside the telecommunications or equipment room. The backbone distribution between the main and intermediate cross-connects provides the highway for information exchanges within the ICT systems.
            </p>
            <p style="text-align: justify;">
              SO: ICT Solutions work in compliance with standards, technology and security requirement, and future-proof structured cabling systems design and installations in:
            </p>
            <div style="display: flex; flex-wrap: wrap;">
              <div style="margin-right: 100px;">
                <ul>
                  <li>Residential</li>
                  <li>Business</li>
                  <li>Mixed-Use</li>
                  <li>Hospital</li>
                  <li>Maritime</li>
                  <li>Military</li>
                  <li>Airport</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Tunnel</li>
                  <li>Railroad</li>
                  <li>Warehouses</li>
                  <li>Parking Areas</li>
                  <li>
                    Data Center
                    <ul>
                      <li>Cabling</li>
                      <li>Containment</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          `,
        },
        {
          tab: 'OSP Projects',
          content: `
            <p style="text-align: justify;">
              OSP project usually refers to inter-building backbone connectivity and its distribution. Outside plant (OSP) projects requires a number of distinct considerations as compared to the intra-building structured cabling system. Complex routes and longer cabling distances require exceptional knowledge in the design, installation and delivery of outside plant projects. ISO: ICT Solutions supports your projects requirements including:
            </p>
            <ul>
              <li>Redundant and Diversified Routes</li>
              <li>Containment Distributions</li>
              <li>Manholes and Handholes Design Requirements</li>
            </ul>
          `,
        },
        {
          tab: 'Security Systems',
          content: `
            <p style="text-align: justify;">
              ISO: ICT Solutions values your assets and incorporates state-of-the art solutions for your total protection.  We offer full range of services for you or your project security systems requirements from BOQ generation, review of requirements, layout preparation and even installation, testing and commissioning.
            </p>
            <p style="text-align: justify;">
              We understand that security designs varies from the gravity or exposure of threats and design and installation need to comply with the guidelines defined by the authorities having the jurisdiction. We develop solutions for:
            </p>
            <ul>
              <li>CCTV and various applications</li>
              <li>Monitoring and Surveillance Systems</li>
              <li>Access Control</li>
            </ul>
          `,
        },
        {
          tab: 'Public Address',
          content: `
            <p style="text-align: justify;">
              Audible, strategic and advance solution must be incorporated in public address systems.  Either to convey information or to sound an alert, sound public address system reaches the target on point while delivering the exact action required.  ISO: ICT Solutions extends services for:
            </p>
            <ul>
              <li>Paging System</li>
              <li>Emergency Sound System</li>
            </ul>
          `,
        },
        {
          tab: 'Audio-Visual',
          content: `
            <p style="text-align: justify;">
              From presentations to an integrated audio visual systems, ISO: ICT Solutions presents the right picture for various systems:
            </p>
            <ul>
              <li>Digital Signage</li>
              <li>IP TV</li>
            </ul>
          `,
        },
        {
          tab: 'Fire Detection and Alarm',
          content: `
            <p style="text-align: justify;">
              Detect and sound the alarm. ISO: ICT Solutions ensures fire detection and alarm systems earliest discovery of developing fire within the designed premises.
            </p>
            <ul>
              <li>Addressable</li>
              <li>Non-addressable</li>
            </ul>
          `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-tab-btn {
  height: auto;
  width: 100%;
  padding: 10px;
  color: grey;
  font-weight: bold;
}

.custom-tab-btn.active {
  color: #009688;
  border-left: 3px solid #009688;
  text-decoration: underline;
  text-decoration-color: #009688;
  font-weight: bold;
}

.custom-tab-btn:hover {
  cursor: pointer;
}

p {
  text-align: justify !important;
}

.service-card {
  border: 2px solid #009688;
  border-radius: 5px;
}
</style>
