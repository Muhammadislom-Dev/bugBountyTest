import React from 'react';

interface ErrorPageProps {
    error: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({error}) => {
    return (
        <div>
            <h1>An error occurred</h1>
            <p>{error}</p>
        </div>
    );
};

export default ErrorPage;
