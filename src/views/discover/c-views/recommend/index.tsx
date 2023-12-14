import { useAppDispatch } from "@/store";
import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { fetchBannerDataAction } from "./store";
import TopBanner from "./c-cpns/top-banner";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = memo(() => {
  // 发起action
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  });
  return <TopBanner></TopBanner>;
});

export default Recommend;
