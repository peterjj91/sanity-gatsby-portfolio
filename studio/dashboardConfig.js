export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea86026384f1264f299794e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-giytwhft',
                  apiId: '55e4f907-298c-4f35-aa9d-d8a9df72f6e7'
                },
                {
                  buildHookId: '5ea86026fe597a7310798f23',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6vacft3p',
                  apiId: 'df1021a4-d73e-4748-9bc5-73f32787c3a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterjj91/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6vacft3p.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
