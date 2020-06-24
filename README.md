![Firebase Hosting](https://github.com/jofftiquez/iso-ict-solutions-website/workflows/Deploy:Prod/badge.svg?branch=master)

# ISO ICT Innovative Solutions - Main Website

> https://isoictsolutions.co

Static website made with Nuxt + Vue.js

# Technologies

- JavaScript
- Nuxt + Vue.js
- Vuetify 2+
- Firebase Hosting
- GitHub Actions - (CI/CD)
- Git - (Version Control)
- Pug.js - Templating engine

# Development Prerequisites

- Node.js
- Firebase Tools
- Nuxt
- Yarn

# Installation and Development

0. **IMPORTANT** - Supply the required environmental variables. Create an `.env` file from the `.env.example` file in the root of the project. For more information about this, read Nuxt.js' documentation about DotEnv.
1. Clone the project
2. Install dependencies using `yarn`
```bash
$ yarn
```
3. Run development server
```bash
$ yarn dev
```

# Deployment to Firebase

**PREREQUISITES**

- **Firebase App ID** - Retrieve from client's firebase dashboard.
- **Firebase Token** - Generate using client's firebase account.
- **ENV** - Check the file `nuxt.config.js`. In the `env` object you'll see:

```javascript
env: {
  CRISP_WEBSITE_ID: process.env.CRISP_WEBSITE_ID, // Crisp chat id - retrieve from client's crisp dashboard
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID, // Retrieve from client's firebase dashboard.
  FIREBASE_TOKEN: process.env.FIREBASE_TOKEN, // Generate using client's firebase account.
  GA_TRACKING_ID: process.env.GA_TRACKING_ID, // Retrieve from client's google analytics account.
  NODE_ENV: process.env.NODE_ENV, // Value must be "production'.
},
```

You must have a working knowledge of CI/CD. This project has an automated workflow using GitHub Actions. For more info about the workflow, see `.github/workflows/production.yml` file in the root of the project.

In `.github/workflows/production.yml` you'll see:
```yml
on: 
  push:
    branches:
      - master
```
This means that any commit your push or merge to the `master` branch, the CI job will run.

Basically, what the "job" does is it deploys the new changes pulled from `master` branch to Firebase Hosting.

For questions, please contact the original author at jofftiquez@gmail.com

Cheers!
