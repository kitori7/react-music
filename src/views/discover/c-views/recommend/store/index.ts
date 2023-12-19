import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum, getPlayListDetail } from "../service";

export const fetchRecommendDataAction = createAsyncThunk("fetchData", async (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners));
  });
  getHotRecommend().then((res) => {
    dispatch(changeRecommendAction(res.result.slice(0, 8)));
  });
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumsAction(res.albums));
  });
});

const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingDataAction = createAsyncThunk("ranking", async (_, { dispatch }) => {
  const promises: Promise<any>[] = [];
  rankingIds.forEach((id) => {
    promises.push(getPlayListDetail(id));
  });

  Promise.all(promises).then((res): any => {
    const playlists = res.map((item) => item.playlist);
    dispatch(changeRankingsAction(playlists));
  });
});

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
  rankings: any[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
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
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload;
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload;
    }
  }
});

export const {
  changeBannersAction,
  changeRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction
} = recommendSlice.actions;
export default recommendSlice.reducer;
