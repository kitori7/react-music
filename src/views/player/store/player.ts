import { createSlice } from "@reduxjs/toolkit";

interface IPlayerState {
  currentSong: any;
}

const initialState: IPlayerState = {
  currentSong: {
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
    rurl: null,
    mst: 9,
    cp: 22036,
    rtype: 0,
    publishTime: 1664726400000
  }
};

const playSlice = createSlice({ name: "playlist", initialState, reducers: {} });

export default playSlice.reducer;
