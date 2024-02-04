import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RecommendWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import SongsItem from "@/components/songs-item";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = memo(() => {
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }),shallowEqual);
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keyword={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends &&
          hotRecommends.map((item) => {
            return <SongsItem key={item.id} itemData={item}></SongsItem>;
          })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
