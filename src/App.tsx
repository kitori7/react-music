import { useRoutes } from "react-router-dom";
import routes from "@/router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

import AppPlayBar from "@/views/player/app-play-bar";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { fetchCurrentSongAction } from "./views/player/store/player";

const App = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchCurrentSongAction(2034187125))
  })

  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="main"> {useRoutes(routes)}</div>
      <AppFooter></AppFooter>
      <AppPlayBar></AppPlayBar>
    </div>
  );
};

export default App;
