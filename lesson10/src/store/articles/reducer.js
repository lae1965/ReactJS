import { REQUEST_STATUS } from "../../Util/constants";
import { GET_ARTICLE_FAILURE, GET_ARTICLE_PENDING, GET_ARTICLE_SUCCESS } from "./action";

const initialState = {
    articlesList: [],
    reguest: {
        error: null,
        status: REQUEST_STATUS.IGLE,
    },
};

export const articlesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLE_PENDING:
            return {
                ...state, 
                reguest: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },  
            }; 
        case GET_ARTICLE_SUCCESS:
            return {
                ...state, 
                articlesList: payload,
                reguest: {
                    ...state.reguest,
                    status: REQUEST_STATUS.SUCCESS,
                },    
            };
        case GET_ARTICLE_FAILURE:
            return {
                ...state,
                reguest: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        default:
            return state;    
    }
};