import { useRoutes } from "react-router-dom";
import routes from "@/router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

import AppPlayBar from "@/views/player/app-play-bar";

const App = () => {
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
