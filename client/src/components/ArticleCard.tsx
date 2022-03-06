import React from 'react';
//import { Article,Prices } from '../types';
import { formatter } from '../utils/utils';

interface Props {
    article: {
        name: string;
        prices: { currency: string; regular: { value: number } };
        images: { path: string }[];
    };
}

const ArticleCard: React.FC<Props> = (props: Props) => {
    const { article } = props;
    return (
        <article className={'article'}>
            <img src={article.images[0].path} />

            <div>{article.name}</div>
            <div>{formatter.format(article.prices.regular.value / 100)}</div>
            <section role="button">Add to cart</section>
        </article>
    );
};
export default ArticleCard;
