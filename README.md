# Next Strapi BLOG
This is a Next.js blog frontend using Apollo to integrate with Strapi headless CMS using GraphQL.


## Installation and usage
1. Setup backend Strapi CMS by following https://strapi.io/documentation/

2. Clone this front end repository

3. In next.config.js change the urls
```nextjs
BACKEND_URL: prod
  ? 'https://production.url'
  : 'https://dev.url',
GRAPHQL_API_URL: prod
  ? 'https://production.url/graphql'
  : 'https://dev.url/graphql'
```
4. run
```nextjs
npm run build
npm start
```

You should be good to go and view your site at http://localhost:3000/

## More about the components

### Strapi
https://strapi.io

### Next.js
https://nextjs.org

### Apollo
https://www.apollographql.com/client/

### GraphQL
https://graphql.org
