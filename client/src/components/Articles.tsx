import React from 'react';
import { Category } from '../types';
import ArticleCard from './ArticleCard';
//import Footer from './Footer';
import './styles.css';
import ReactPaginate from 'react-paginate';

interface Props {
    categories: Category[];
}
interface State {
    selected: number;
}

const Articles: React.FC<Props> = (props: Props) => {
    const { categories } = props;
    const [pageNumber, setPageNumber] = React.useState(0);
    const articlesPerPage = 12;
    const pagesVisited = pageNumber * articlesPerPage;

    const articles = categories.map(category => {
        return category.categoryArticles.articles
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map((article, index) => {
                return <ArticleCard key={index} article={article} />;
            });
    });
    const pageCount = Math.ceil(60 / articlesPerPage);

    const changePage = ({ selected }: State) => {
        setPageNumber(selected);
    };
    return (
        <>
            <article className={'content'}>
                {categories.length ? (
                    <h1 className="article__name">
                        {categories[0].name}
                        <small> ({categories[0].articleCount})</small>
                    </h1>
                ) : null}
                <article className={'articles'}>{articles}</article>
                {articles && categories.length > 0 && (
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                )}
            </article>
        </>
    );
};
export default Articles;
