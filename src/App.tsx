import { Link, useRoutes } from "react-router-dom";
import routes from "@/router";

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div className="main"> {useRoutes(routes)}</div>
    </div>
  );
};

export default App;
