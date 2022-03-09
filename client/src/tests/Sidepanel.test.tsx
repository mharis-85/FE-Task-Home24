import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../components/sidePanel/Sidebar';
import { ChildCategory, Category } from '../types';
test('render name', () => {
    const ChildCategory: ChildCategory[] = [
        { name: 'Wohnzimmer', urlPath: '/kategorie/wohnzimmermoebel/' },
    ];
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

    render(<Sidebar categories={categories} />);
    const anchorElements = screen.getAllByRole('navigation');
    expect(categories.length).toBeGreaterThan(0);
    expect(anchorElements[0]).toHaveAttribute('href', ChildCategory[0].urlPath);
    expect(anchorElements[0]).toHaveTextContent(ChildCategory[0].name);
});
