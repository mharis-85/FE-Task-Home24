// This file is for accesing api endpoints
const apiUrl = '/graphql';
const queryString = `{
    categories(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories {
        name
        urlPath
      }
      categoryArticles(first: 50) {
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
export const fetchingData = xhr => {
    try {
        xhr.open('POST', apiUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(
            JSON.stringify({
                query: queryString,
            })
        );
    } catch (error) {
        console.log('error message', error);
    }
};
