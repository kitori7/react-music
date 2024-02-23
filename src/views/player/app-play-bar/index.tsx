import { memo, useState, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from "./style";
import { Link } from "react-router-dom";
import { Slider, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/store";
import { formatTime, getImgSize } from "@/utils/fomat";
import { shallowEqual } from "react-redux";
import { getSongPlayUrl } from "@/utils/handle-player";
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from "../store/player";

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = memo(() => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSlider, setIsSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  );
  const dispatch = useAppDispatch();

  // 歌曲播放
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong?.id);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });

    // 设置总时长
    setDuration(currentSong.dt);
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
    const currentTime = audioRef.current!.currentTime * 1000;

    // 拖拽中不改变进度，计算歌曲进度
    if (!isSlider) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }

    // 计算当前歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }

    if (index === lyricIndex || index === -1) return;
    dispatch(changeLyricIndexAction(index));

    message.config({
      top: 620
    });
    message.open({
      key: "lyrics",
      content: lyrics[index]?.text,
      duration: 0
    });
  }

  function handleSlideChange(value: number) {
    setIsSlider(true);
    setProgress(value);

    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
  }

  function handleSlideChanged(value: number) {
    const currentTime = (value / 100) * duration;
    audioRef.current!.currentTime = currentTime / 1000;

    setCurrentTime(currentTime);
    setProgress(value);
    setIsSlider(false);
  }

  // 修改播放模式
  function handlePlayMode() {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) newPlayMode = 0;
    dispatch(changePlayModeAction(newPlayMode));
  }

  // 上下一首
  function handleChangeMusic(isNext: boolean) {
    dispatch(changeMusicAction(isNext));
  }

  // 结束
  function handleEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0;
    } else {
      handleChangeMusic(true);
    }
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl $isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic(true)}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="image" src={getImgSize(currentSong?.al?.picUrl, 50)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">
                {currentSong?.ar?.map((item: any) => item.name).join("/")}
              </span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChangeComplete={handleSlideChanged}
                onChange={handleSlideChange}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop" onClick={handlePlayMode}></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded}></audio>
    </PlayerBarWrapper>
  );
});

export default AppPlayerBar;
