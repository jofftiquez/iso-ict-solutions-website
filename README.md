# ISO ICT Innovative Solutions - Main Website

> https://iso-ict-solutions.web.app

Static website made with Nuxt + Vue.js

# Technologies

- JavaScript
- Nuxt + Vue.js
- Vuetify 2+
- Firebase Hosting
- GitHub Actions - (CI/CD)
- Git - (Version Control)

# Development Prerequisites

- Node.js
- Firebase Tools
- Nuxt
- Yarn

# Installation and Development

0. Supply the required environmental variables. Create an `.env` file from the `.env.example` file in the root of the project. For more information about this, read Nuxt.js' documentation about DotEnv.
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

You must have a working knowledge of CI/CD. This project has an automated workflow using GitHub Actions. For more info about the workflow, see `.github/workflows/production.yml` file in the root of the project.

In `.github/workflows/production.yml` you'll see:
```yml
on: 
  push:
    branches:
      - master
```
This means that any commit your push or merge to the `master` branch, the CI job will run.

Basically, what the "job" does is it deploys the new changes to pulled from `master` branch to Firebase Hosting.

For questions, please contact the original author at jofftiquez@gmail.com

Cheers!