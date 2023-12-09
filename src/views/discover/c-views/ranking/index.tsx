import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Ranking: FC<IProps> = memo(() => {
  return <div>Ranking</div>;
});

export default Ranking;
