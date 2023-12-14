import { memo, useRef, useState } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import classNames from "classnames";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import { Carousel } from "antd";

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = memo(() => {
  // 从store获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  );

  // 事件处理
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  function handleClick(isNext: boolean) {
    if (isNext) {
      bannerRef.current?.next();
    } else {
      bannerRef.current?.prev();
    }
  }
  // 轮播切换
  const [current, setCurrent] = useState(0);
  function handleAfterChange(current: number) {
    setCurrent(current);
  }
  function handleBeforeChange() {
    // setCurrent(-1);
  }
  // 获取背景图片
  let bgImageUrl = "";
  if (current >= 0 && banners.length > 0) {
    bgImageUrl = banners[current]?.imageUrl + "?imageView&blur=40x20&quot";
  }
  function handleDotClick(index: number) {
    bannerRef.current?.goTo(index);
  }
  return (
    <BannerWrapper style={{ background: `url('${bgImageUrl}') center center / 6000px` }}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            dots={false}
            afterChange={handleAfterChange}
            beforeChange={handleBeforeChange}
            autoplay
            ref={bannerRef}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => handleDotClick(index)}>
                  <span
                    className={classNames("item", {
                      active: index === current
                    })}
                  ></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => handleClick(false)}></button>
          <button className="btn right" onClick={() => handleClick(true)}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
