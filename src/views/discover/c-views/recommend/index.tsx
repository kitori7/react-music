import { useAppDispatch } from "@/store";
import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { fetchBannerDataAction, fetchHotRecommendAction } from "./store";
import TopBanner from "./c-cpns/top-banner";
import { RecommendWrapper } from "./style";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = memo(() => {
  // 发起action
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
  });
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
});

export default Recommend;
