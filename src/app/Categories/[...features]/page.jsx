import React from 'react';
import PropTypes from 'prop-types';

const CategoryDetailsPage = ({ params }) => {
    console.log({ params });

    const { features } = params;

    if (features && features.length === 3) {
        return <div className='feature-item'>{features[2]}</div>;
    }

    if (features && features.length === 2) {
        return <div className='feature-item'>{features[1]}</div>;
    }

    return (
        <div>
            <h1 className='text-3xl'>Category Details Page</h1>
        </div>
    );
};

CategoryDetailsPage.propTypes = {
    params: PropTypes.shape({
        features: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default CategoryDetailsPage;

export async function generateStaticParams() {
    const posts = [
        { features: ['feature1', 'feature2', 'feature3'] },
        { features: ['feature1', 'feature2'] },
        { features: ['feature1'] },
    ];
    
    return posts.map((post) => ({
        features: post.features,
    }));
}
