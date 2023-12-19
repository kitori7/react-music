import { memo, useRef } from "react";
import type { ElementRef, FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { Carousel } from "antd";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import NewAlbumItem from "@/components/new-album-item";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = memo(() => {
  // 数据
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  );

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  function handelClick(isNext = false) {
    if (isNext) {
      bannerRef.current?.next();
    } else {
      bannerRef.current?.prev();
    }
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button className="arrow sprite_02 arrow-left" onClick={() => handelClick()}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="album-box" key={item}>
                  <div className="album-list">
                    {newAlbums &&
                      newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                        return <NewAlbumItem key={album.id} itemData={album} />;
                      })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="arrow sprite_02 arrow-right" onClick={() => handelClick(true)}></button>
      </div>
    </AlbumWrapper>
  );
});

export default NewAlbum;
