import React from 'react';
//import { Article,Prices } from '../types';
import { formatter } from '../../utils/utils';
import './styles.css';
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
            <section className="article__imagecontainer">
                <img src={article.images[0].path} />
            </section>
            <section className="article__description">
                <p className="article__heading">{article.name}</p>
                <p className="article__price">
                    {formatter.format(article.prices.regular.value / 100)}
                </p>
            </section>
            <section role="button" className="addcart__button">
                Add to cart
            </section>
        </article>
    );
};
export default ArticleCard;
