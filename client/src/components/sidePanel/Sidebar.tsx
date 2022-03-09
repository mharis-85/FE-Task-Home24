import React from 'react';
import { Category } from '../../types';
import './styles.css';

interface Props {
    categories: Category[];
}

const Sidebar: React.FC<Props> = (props: Props) => {
    const { categories } = props;
    return (
        <aside className={'sidebar'}>
            <h3>Kategorien</h3>
            {categories.length ? (
                <ul>
                    {categories[0].childrenCategories.map(
                        ({ name, urlPath }) => {
                            return (
                                <li key={name}>
                                    <a role="navigation" href={`/${urlPath}`}>
                                        {name}
                                    </a>
                                </li>
                            );
                        }
                    )}
                </ul>
            ) : null}
        </aside>
    );
};

export default Sidebar;
