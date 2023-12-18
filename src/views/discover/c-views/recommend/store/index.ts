import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend } from "../service";

export const fetchBannerDataAction = createAsyncThunk("banners", async (payload, { dispatch }) => {
  const res = await getBanners();
  dispatch(changeBannersAction(res.banners));
});

export const fetchHotRecommendAction = createAsyncThunk(
  "hotRecommendations",
  async (payload, { dispatch }) => {
    const res = await getHotRecommend();
    dispatch(changeRecommendAction(res.result.slice(0, 8)));
  }
);

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.hotRecommends = payload;
    }
  }
});

export const { changeBannersAction, changeRecommendAction } = recommendSlice.actions;
export default recommendSlice.reducer;
