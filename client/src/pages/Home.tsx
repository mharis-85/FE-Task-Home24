import React, { useEffect, Suspense, lazy } from 'react';
import './styles.css';
import { Category } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { apiUrl, queryString } from '../utils/helper';
import load from '../assets/Spinner-2.gif';
import axios from 'axios';

const Sidebar = lazy(() => import('../components/Sidebar'));
const Articles = lazy(() => import('../components/Articles'));

const Home: React.FC = () => {
    const [categories, setcategories] = React.useState<Category[]>([]);

    async function getdata() {
        try {
            const data = await axios.post(
                apiUrl,
                {
                    query: queryString,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('data', data);
            if (data.status === 200) {
                setcategories(data.data.data.categories);
                //console.log('categories', categories);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata();
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
                    <Footer />
                </Suspense>
            </main>
        </React.Fragment>
    );
};

export default Home;
