import React from 'react';

import { Category, Article } from '../types';
import { fetchingData, formatter } from '../utils/utils'
import './ProductList.css';

type State = {
  categories: Category[];
};

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className={'article'}>
      <img src={article.images[0].path} />

         <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  )
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    fetchingData(xhr)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    const articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article,index) => {
        return <ArticleCard key={index} article={article} />;
      });
    });

    return (
      <div className={'page'}>
        <div className={'header'}>
          <strong>home24</strong>
          <input placeholder={'Search'} />
        </div>

        <div className={'sidebar'}>
          <h3>Kategorien</h3>
          {this.state.categories.length ? (
            <ul>
              {this.state.categories[0].childrenCategories.map(({ name, urlPath }) => {
                return (
                  <li key={name}>
                    <a href={`/${urlPath}`}>{name}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            'Loading...'
          )}
        </div>

        <div className={'content'}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            'Loading...'
          )}
          <div className={'articles'}>{articles}</div>
        </div>

        <div className={'footer'}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </div>
      </div>
    );
  }
}

const PLP = () => {
  return <ArticleList />;
};

export default PLP;
