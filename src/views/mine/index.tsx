import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = memo(() => {
  return <div>Mine</div>;
});

export default Mine;
