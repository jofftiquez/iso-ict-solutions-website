<template lang="pug">
  v-container(id="the-company")
    v-row(justify="center" align="center")
      //- v-col(cols="12" md="6").text-center
      //-   img(width="100%" src="../../assets/images/the-company.jpg")
      v-col(cols="12" md="12").text-center
        h1(:class="{ 'display-3': !$isMobile, 'display-2': $isMobile }").display-4.font-weight-black We Innovate
        h2.primary--text About Us
        br
        p.text-justify Innovative Smart Options: ICT Solutions acts as your back office and reliable business partner available 24/7 via online means. Our highly trained, certified and well-experienced professionals will work and prepare any phase or phases of your project scope. ISO: ICT Solutions helps you save time and cost using an entirely new approach.
        p.text-justify Challenging times demand innovative strategies in all aspects of activities from project pre-sales preparation, requirement review, development, deployment, monitoring, and completion to post-project services delivery.
        p.text-justify We understand your financial and social constraints in organizing your team and we further support your commitment to a successful project hand-over.
      //- v-col(cols="12" md="6").text-center.pa-10
      //-   img(:width="$isMobile ? '100%' : '350'" src="~/assets/images/the-company.svg")
      //- v-col(cols="12" md="6").pa-10
      //-   h1.primary--text The Company
      //-   p Innovative Smart Options: ICT Solutions acts as your back office and reliable business partner available 24/7 via online means. Our highly trained, certified and well-experienced professionals will work and prepare any phase or phases of your project scope. ISO: ICT Solutions helps you save time and cost using an entirely new approach.
      //-   p Challenging times demand innovative strategies in all aspects of activities from project pre-sales preparation, requirement review, development, deployment, monitoring, and completion to post-project services delivery.
      //-   p We understand your financial and social constraints in organizing your team and we further support your commitment to a successful project hand-over.
</template>
