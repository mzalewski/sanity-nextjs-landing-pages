export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dab88bcbe319fe7a89356c9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-27n91bwk',
                  apiId: 'd5ea10ca-48db-4eb5-82c5-ea1f2426c8d9'
                },
                {
                  buildHookId: '5dab88bc5aa1fede495a6674',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-67obqqxo',
                  apiId: '708bdec1-0881-479a-8bec-e5a755dfdb43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mzalewski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-67obqqxo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
