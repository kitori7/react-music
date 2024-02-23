import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyric } from "../service/player";
import { ILyric, parseLyric } from "@/utils/parse-lyric";
import type { IRootState } from "@/store";

export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  "currentSong",
  (id, { dispatch, getState }) => {
    const playSongList = getState().player.playSongList;
    const findIndex = playSongList.findIndex((item) => item.id === id);

    // 没找到
    if (findIndex === -1) {
      getSongDetail(id).then((res: any) => {
        const song = res.songs[0];
        dispatch(changeCurrentSongAction(song));
        const newPlaySongList = [...playSongList];
        newPlaySongList.push(song);
        dispatch(changePlaySongListAction(newPlaySongList));
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
      });
      getSongLyric(id).then((res: any) => {
        const lyricString = res.lrc.lyric;
        dispatch(changeLyricsAction(parseLyric(lyricString)));
      });
    } else {
      //找到了
      const song = playSongList[findIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlaySongIndexAction(findIndex));
    }
  }
);

export const changeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  "changeMusic",
  (isNext, { dispatch, getState }) => {
    const player = getState().player;
    const { playMode, playSongIndex, playSongList } = player;
    let newIndex = playSongIndex;
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * playSongList.length);
    } else {
      newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1;
      if (newIndex > playSongList.length - 1) newIndex = 0;
      if (newIndex < 0) newIndex = playSongList.length - 1;
    }

    dispatch(changeCurrentSongAction(playSongList[newIndex]));
    dispatch(changePlaySongIndexAction(newIndex));

    getSongLyric(playSongList[newIndex].id).then((res: any) => {
      const lyricString = res.lrc.lyric;
      dispatch(changeLyricsAction(parseLyric(lyricString)));
    });
  }
);

interface IPlayerState {
  currentSong: any;
  lyrics: ILyric[];
  lyricIndex: number;
  playSongList: any[];
  playSongIndex: number;
  playMode: 0 | 1 | 2;
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: "蝴蝶",
      id: 1984760614,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13699781,
          name: "马赫mood",
          tns: [],
          alias: []
        },
        {
          id: 13524040,
          name: "杜逸风 Firewind SoKu",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 95,
      st: 0,
      rt: "",
      fee: 8,
      v: 5,
      crbt: null,
      cf: "",
      al: {
        id: 152281827,
        name: "糟糕的日子里",
        picUrl: "https://p2.music.126.net/5ErjBLJU9mWMwHNBQy1m-Q==/109951167911889678.jpg",
        tns: [],
        pic_str: "109951167911889678",
        pic: 109951167911889680
      },
      dt: 184000,
      h: {
        br: 320002,
        fid: 0,
        size: 7362395,
        vd: -17464,
        sr: 44100
      },
      m: {
        br: 192002,
        fid: 0,
        size: 4417454,
        vd: -14838,
        sr: 44100
      },
      l: {
        br: 128002,
        fid: 0,
        size: 2944984,
        vd: -13025,
        sr: 44100
      },
      sq: {
        br: 1491926,
        fid: 0,
        size: 34314305,
        vd: -17464,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: "01",
      no: 19,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 22036,
      rtype: 0,
      rurl: null,
      publishTime: 1664726400000
    },
    {
      name: "不再是个孩子",
      id: 2040603345,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12200580,
          name: "谟西Mercy",
          tns: [],
          alias: []
        },
        {
          id: 12853605,
          name: "SHarK",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 7,
      crbt: null,
      cf: "",
      al: {
        id: 163999779,
        name: "全职Rapper",
        picUrl: "https://p1.music.126.net/1flkEdh8cfG04RILTqGqJw==/109951168557142816.jpg",
        tns: [],
        pic_str: "109951168557142816",
        pic: 109951168557142820
      },
      dt: 206696,
      h: {
        br: 320000,
        fid: 0,
        size: 8270445,
        vd: -55284,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4962285,
        vd: -52748,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3308205,
        vd: -50952,
        sr: 48000
      },
      sq: {
        br: 993732,
        fid: 0,
        size: 25675089,
        vd: -55872,
        sr: 48000
      },
      hr: {
        br: 1763277,
        fid: 0,
        size: 45557846,
        vd: -55267,
        sr: 48000
      },
      a: null,
      cd: "01",
      no: 11,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 7,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1682870400000
    },
    {
      name: "沉溺（你让我的心不再结冰）",
      id: 2034187125,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 48345452,
          name: "邹沛沛",
          tns: [],
          alias: []
        },
        {
          id: 36341115,
          name: "Pank",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 6,
      crbt: null,
      cf: "",
      al: {
        id: 162622803,
        name: "沉溺（你让我的心不再结冰）",
        picUrl: "https://p2.music.126.net/WhsaW6an5oI4XZN0KhQ5fA==/109951168502947956.jpg",
        tns: [],
        pic_str: "109951168502947956",
        pic: 109951168502947950
      },
      dt: 193773,
      h: {
        br: 320000,
        fid: 0,
        size: 7753005,
        vd: -51902,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4651821,
        vd: -49299,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3101229,
        vd: -47586,
        sr: 48000
      },
      sq: {
        br: 923477,
        fid: 0,
        size: 22368208,
        vd: -52296,
        sr: 48000
      },
      hr: {
        br: 2777201,
        fid: 0,
        size: 67268589,
        vd: -51977,
        sr: 96000
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7003,
      publishTime: 1680105600000
    }
  ],
  playSongIndex: -1,
  playMode: 0 //0顺序 1随机 2单曲
};

const playSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload;
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    }
  }
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction
} = playSlice.actions;

export default playSlice.reducer;
