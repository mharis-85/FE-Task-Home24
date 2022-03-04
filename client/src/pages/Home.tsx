import React from 'react';
import ProductList from './ProductList';
import './styles.css';
import Header from '../components/Header';
import Articles from '../components/Articles';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
//type Props = {}

const Home: React.FC = () => {
    return (
        // <ProductList />
        <React.Fragment>
            <main className={'page'}>
                <Header />
                <Articles />
                <Sidebar />
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Home;
