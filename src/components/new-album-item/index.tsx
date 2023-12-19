import { memo } from "react";
import type { FC, ReactNode } from "react";
import { AlbumItemWrapper } from "./style";
import { getImgSize } from "@/utils/fomat";

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const NewAlbumItem: FC<IProps> = memo((props) => {
  const { itemData } = props;

  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImgSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  );
});

export default NewAlbumItem;
