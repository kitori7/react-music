import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from "react-redux";

import recommendReducer from "@/views/discover/c-views/recommend/store";
import playerReducer from "@/views/player/store/player";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;

type DispatchType = typeof store.dispatch;

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const appShallowEqual = shallowEqual;

export default store;
