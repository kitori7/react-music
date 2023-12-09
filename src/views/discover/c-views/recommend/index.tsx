import requests from "@/service";
import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = memo(() => {
  useEffect(() => {
    requests
      .get({
        url: "/banner"
      })
      .then((res) => {
        console.log(res);
      });
  });

  return <div>Recommend</div>;
});

export default Recommend;
