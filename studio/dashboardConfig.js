export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f6af88f95864cd9ee0292ad',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4bcd44ns',
                  apiId: '331fc65a-fb56-4918-8898-2233c8b0bc42'
                },
                {
                  buildHookId: '5f6af88f6bfe2dcd90d63868',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-b4fd7i9d',
                  apiId: 'd747b12d-0435-4126-9371-c43472c922b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strategicallynicole/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-b4fd7i9d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
