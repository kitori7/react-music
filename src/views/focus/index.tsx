import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = memo(() => {
  return <div>Focus</div>;
});

export default Focus;
