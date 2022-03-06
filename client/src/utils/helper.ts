// This file is for accesing api endpoints
export const apiUrl = '/graphql';
export const queryString = `{
    categories(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories {
        name
        urlPath
      }
      categoryArticles(first: 60) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(
            format: WEBP
            maxWidth: 200
            maxHeight: 200
            limit: 1
          ) {
            path
          }
        }
      }
    }
  }`;
