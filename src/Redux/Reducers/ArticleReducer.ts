import { ADD_ARTICLE_SUCCESS, INIT_ARTICLES } from "../../Constants/ActionTypes"

const initialState = {
  articles: []
}
export default function article(state = initialState, { type, payload }: { type: string, payload: any }) {
  switch (type) {
    case ADD_ARTICLE_SUCCESS: {
      return {
        ...state,
        articles: [...[payload.article], ...state.articles]
      }
    }
    case INIT_ARTICLES: 
    return {
      ...state,
      articles: orderByTimestamp(payload.articles)
    }
    default:
      return {
        ...state
      }
  }
}

const orderByTimestamp = (list: any[]): any[] => {
  return list.sort((x, y) => {
    return new Date(x.createdAt) < new Date(y.createdAt) ? 1 : -1
  })
}
