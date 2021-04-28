export default {
  widgets: [
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
                  buildHookId: '60898e7257695f00df33335b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7w2vdz56',
                  apiId: '122e7a44-3764-4339-bc26-d063ea3e13ae'
                },
                {
                  buildHookId: '60898e73b3e26500d9267a1b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kwqeza4j',
                  apiId: '97d47a07-87d3-4434-9a72-da13d54d9d0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mantonx/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kwqeza4j.netlify.app', category: 'apps'}
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
