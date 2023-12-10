import { useRoutes } from "react-router-dom";
import routes from "@/router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = () => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="main"> {useRoutes(routes)}aap</div>
      <AppFooter></AppFooter>
    </div>
  );
};

export default App;
