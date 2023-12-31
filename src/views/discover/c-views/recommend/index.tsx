import { useAppDispatch } from "@/store";
import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { fetchRankingDataAction, fetchRecommendDataAction } from "./store";
import TopBanner from "./c-cpns/top-banner";
import { RecommendWrapper } from "./style";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopRanking from "./c-cpns/top-ranking";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = memo(() => {
  // 发起action
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRankingDataAction());
  });
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  );
});

export default Recommend;
