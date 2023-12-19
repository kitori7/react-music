import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import TopRankingItem from "../top-ranking-item";

interface IProps {
  children?: ReactNode;
}

const TopRanking: FC<IProps> = memo(() => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }));

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"></AreaHeaderV1>
      <div className="content">
        {rankings?.map((item) => {
          return <TopRankingItem key={item.id} itemData={item}></TopRankingItem>;
        })}
      </div>
    </RankingWrapper>
  );
});

export default TopRanking;
