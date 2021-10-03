import { REQUEST_STATUS } from "../../Util/constants";


export const selectArticles = (state) => state.articles.articlesList;
export const selectError = (state) => state.articles.reguest.error;
export const selectLoading = (state) => (state.articles.reguest.status === REQUEST_STATUS.PENDING);