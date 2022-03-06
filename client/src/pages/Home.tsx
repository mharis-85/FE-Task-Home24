import React, { useEffect, Suspense, lazy } from 'react';
import './styles.css';
import { Category } from '../types';
import Header from '../components/Header';
//import Articles from '../components/Articles';
//import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { fetchingData } from '../utils/helper';
import load from '../assets/Spinner-2.gif';

const Sidebar = lazy(() => import('../components/Sidebar'));
const Articles = lazy(() => import('../components/Articles'));

const Home: React.FC = () => {
    const [categories, setcategories] = React.useState<Category[]>([]);

    useEffect(() => {
        //setTimeout()
        const xhr = new XMLHttpRequest();
        fetchingData(xhr);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response);

                setcategories(response.data.categories);
            }
        };
    }, []);

    return (
        <React.Fragment>
            <main className={'page'}>
                <Header />
                <Suspense
                    fallback={
                        <div className="loader">
                            <img
                                className="loader__image"
                                src={load}
                                //alt="Loading..."
                            />
                        </div>
                    }
                >
                    <Articles categories={categories} />
                    <Sidebar categories={categories} />
                </Suspense>

                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Home;
