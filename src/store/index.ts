import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from "react-redux";

const store = configureStore({
  reducer: {}
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;

type DispatchType = typeof store.dispatch;

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const appShallowEqual = shallowEqual;

export default store;
