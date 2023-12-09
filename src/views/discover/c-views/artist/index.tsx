import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = memo(() => {
  return <div>Artist</div>;
});

export default Artist;
