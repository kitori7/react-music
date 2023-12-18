import { memo, useRef } from "react";
import type { ElementRef, FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { Carousel } from "antd";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = memo(() => {
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
            {[1, 2].map((item) => {
              return <h1 key={item}>{item}</h1>;
            })}
          </Carousel>
        </div>
        <button className="arrow sprite_02 arrow-right" onClick={() => handelClick(true)}></button>
      </div>
    </AlbumWrapper>
  );
});

export default NewAlbum;
