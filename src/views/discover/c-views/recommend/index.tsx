import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = memo(() => {
  return <div>Recommend</div>;
});

export default Recommend;
