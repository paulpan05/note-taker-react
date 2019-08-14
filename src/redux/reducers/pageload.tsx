import { PageloadState } from "../../types/redux";
import { AnyAction } from "redux";
import { pageloadConstants } from "../../constants/redux/pageload";

const initialState: PageloadState = {
  pageLoading: true
}

const pageload = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case pageloadConstants.LOADING_PAGE:
      return {
        ...state,
        pageLoading: true
      }
    case pageloadConstants.LOADING_PAGE_FINISHED:
      return {
        ...state,
        pageLoading: false
      }
    default:
      return state;
  }
}

export default pageload;