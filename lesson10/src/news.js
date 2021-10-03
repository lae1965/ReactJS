import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';

import { getArticle } from './store/articles/action';
import { selectArticles, selectError, selectLoading } from './store/articles/selectors';

export const News = () => {
    const articles = useSelector(selectArticles);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading); 

    const dispatch = useDispatch();

    const reload = () => {
        dispatch(getArticle());
    };

    useEffect(() => {
        reload();
    }, []);
    
    return (
        <div>
            <h2>News</h2>
            {!!error ? 
            (<>
                <h3>{error}</h3>
                <Button onClick={reload} variant="contained" color="primary">Reload News</Button>
            </>) :
            (articles.map((art) => (
                <article key={art.id}>{art.title}</article>
            )))}
            {loading && <CircularProgress />}  
        </div>
    );
}