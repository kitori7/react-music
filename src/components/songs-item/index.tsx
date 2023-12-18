import { memo } from "react";
import type { FC, ReactNode } from "react";
import { MenuItemWrapper } from "./style";
import { formatCount, getImgSize } from "@/utils/fomat";

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const SongsItem: FC<IProps> = memo((props) => {
  const { itemData } = props;
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImgSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="headset sprite_icon"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  );
});

export default SongsItem;
