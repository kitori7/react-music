import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from "react-redux";

import recommendReducer from "@/views/discover/c-views/recommend/store";

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;

type DispatchType = typeof store.dispatch;

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const appShallowEqual = shallowEqual;

export default store;
