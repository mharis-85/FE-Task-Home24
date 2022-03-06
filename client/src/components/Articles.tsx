import React from 'react';
import { Category } from '../types';
import ArticleCard from './ArticleCard';
import './styles.css';

interface Props {
    categories: Category[];
}

const Articles: React.FC<Props> = (props: Props) => {
    const { categories } = props;
    console.log('categories', categories);

    const articles = categories.map(category => {
        return category.categoryArticles.articles.map((article, index) => {
            return <ArticleCard key={index} article={article} />;
        });
    });
    return (
        <article className={'content'}>
            {categories.length ? (
                <h1>
                    {categories[0].name}
                    <small> ({categories[0].articleCount})</small>
                </h1>
            ) : null}
            <article className={'articles'}>{articles}</article>
        </article>
    );
};
export default Articles;
