import { memo, useState, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from "./style";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import { useAppSelector } from "@/store";
import { getImgSize } from "@/utils/fomat";
import { shallowEqual } from "react-redux";
import { getSongPlayUrl } from "@/utils/handle-player";

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = memo(() => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  );

  // 歌曲播放
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });

      // 设置总时长
      // setDuration(currentSong.)
  }, [currentSong]);
  // 播放点击
  const [isPlaying, setIsPlaying] = useState(false);
  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }

  function handleTimeUpdate() {
    const currentTime = audioRef.current?.currentTime;
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="image" src={getImgSize(currentSong?.al.picUrl, 50)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">
                {currentSong?.ar.map((item: any) => item.name).join("/")}
              </span>
            </div>
            <div className="progress">
              <Slider></Slider>
              <div className="time">
                <span className="current"></span>
                <span className="divider"></span>
                <span className="duration"></span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </PlayerBarWrapper>
  );
});

export default AppPlayerBar;
