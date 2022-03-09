import React from 'react';
import { render } from '@testing-library/react';
import Articles from '../components/articles/Articles';
import { Category } from '../types';

test('check for name of Categories', () => {
    const categories: Category[] = [
        {
            name: 'Möbel',
            articleCount: 78278,
            categoryArticles: {
                articles: [
                    {
                        name: 'Premium Komfortmatratze Smood',

                        variantName: '180 x 200cm',

                        prices: {
                            currency: 'EUR',

                            regular: {
                                value: 54999,
                            },
                        },

                        images: [
                            {
                                path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
                            },
                        ],
                    },
                ],
            },
            childrenCategories: [
                {
                    name: 'Wohnzimmer',
                    urlPath: 'kategorie/wohnzimmermoebel/',
                },
            ],
        },
    ];

    render(<Articles categories={categories} />);
    expect('Möbel').toMatch(categories[0].name);
});

test('check for name of Categories', () => {
    const categories: Category[] = [
        {
            name: 'Möbel',
            articleCount: 78278,
            categoryArticles: {
                articles: [
                    {
                        name: 'Premium Komfortmatratze Smood',

                        variantName: '180 x 200cm',

                        prices: {
                            currency: 'EUR',

                            regular: {
                                value: 54999,
                            },
                        },

                        images: [
                            {
                                path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
                            },
                        ],
                    },
                ],
            },
            childrenCategories: [
                {
                    name: 'Wohnzimmer',
                    urlPath: 'kategorie/wohnzimmermoebel/',
                },
            ],
        },
    ];

    render(<Articles categories={categories} />);
    expect(78278).toBe(categories[0].articleCount);
});
