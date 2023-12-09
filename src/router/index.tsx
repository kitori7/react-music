import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Discover from "@/views/discover";
import Mine from "@/views/mine";
import Focus from "@/views/focus";
import DownLoad from "@/views/download";
import Recommend from "@/views/discover/c-views/recommend";
import Songs from "@/views/discover/c-views/songs";
import Ranking from "@/views/discover/c-views/ranking";
import DjRadio from "@/views/discover/c-views/djradio";
import Album from "@/views/discover/c-views/album";
import Artist from "@/views/discover/c-views/artist";

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/discover" /> },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommend></Recommend>
      },
      {
        path: "/discover/songs",
        element: <Songs></Songs>
      },
      {
        path: "/discover/ranking",
        element: <Ranking></Ranking>
      },
      {
        path: "/discover/djradio",
        element: <DjRadio></DjRadio>
      },
      {
        path: "/discover/album",
        element: <Album></Album>
      },
      {
        path: "/discover/artist",
        element: <Artist></Artist>
      }
    ]
  },
  { path: "/mine", element: <Mine /> },
  { path: "/focus", element: <Focus /> },
  { path: "/download", element: <DownLoad /> }
];

export default routes;
