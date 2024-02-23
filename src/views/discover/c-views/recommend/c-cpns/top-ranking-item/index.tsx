import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingItemWrapper } from "./style";
import { getImgSize } from "@/utils/fomat";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/store";
import { fetchCurrentSongAction } from "@/views/player/store/player";

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const TopRankingItem: FC<IProps> = memo((props) => {
  const { itemData } = props;
  const { tracks = [] } = itemData;
  const dispatch = useAppDispatch();
  function handlePlay(id: number) {
    dispatch(fetchCurrentSongAction(id));
  }
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImgSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite-cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="btn sprite_02 play"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => handlePlay(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  );
});

export default TopRankingItem;
