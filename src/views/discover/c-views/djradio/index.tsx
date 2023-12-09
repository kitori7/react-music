import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const DjRadio: FC<IProps> = memo(() => {
  return <div>DjRadio</div>;
});

export default DjRadio;
