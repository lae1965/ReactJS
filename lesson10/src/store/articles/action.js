import { PUBLIC_URL } from "../../Util/constants";

export const GET_ARTICLE_PENDING = 'ARTICLE::GET_PENDING';
export const GET_ARTICLE_SUCCESS = 'ARTICLE::GET_SUCCESS';
export const GET_ARTICLE_FAILURE = 'ARTICLE::GET_FAILURE';

const getArticlePending = () => ({
    type: GET_ARTICLE_PENDING,
});

const getArticleSuccess = (result) => ({
    type: GET_ARTICLE_SUCCESS,
    payload: result,
});

const getArticleFailure = (error) => ({
    type: GET_ARTICLE_FAILURE,
    payload: error,
});

export const getArticle = () => (dispatch) => {
    dispatch(getArticlePending());
    fetch(PUBLIC_URL).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        return response.json();
    }).then((result) => {
        dispatch(getArticleSuccess(result));
    }).catch((err) => {
        dispatch(getArticleFailure(err.message));
    });
}