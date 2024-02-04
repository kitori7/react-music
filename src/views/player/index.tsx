import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Player: FC<IProps> = memo(() => {
  return <div>Player</div>;
});

export default Player;
