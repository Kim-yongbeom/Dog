import { ImageState } from "../../types";
import { createActions, handleActions } from "redux-actions";

const initialState: ImageState = {
  id: null,
  url: null,
  loading: false,
  error: null,
};

const prefix = "/images/search";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<ImageState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      id: action.payload,
      url: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga
export function* imageSaga() {}
