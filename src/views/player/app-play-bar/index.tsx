import { memo } from "react";
import type { FC, ReactNode } from "react";
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from "./style";
import { Link } from "react-router-dom";
import { Slider } from "antd";

interface IProps {
  children?: ReactNode;
}

const AppPlayBar: FC<IProps> = memo(() => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={false}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src="" alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name"></div>
              <div className="song-singer"></div>
            </div>
            <div className="progress">
              <Slider></Slider>
              <div className="time">
                <div className="current"></div>
                <div className="divider"></div>
                <div className="duration"></div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={1}></BarOperator>
      </div>
    </PlayerBarWrapper>
  );
});

export default AppPlayBar;
