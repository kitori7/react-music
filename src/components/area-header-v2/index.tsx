import { memo } from "react";
import type { FC, ReactNode } from "react";
import { HeaderV2Wrapper } from "./style";
interface IProps {
  title: string;
  children?: ReactNode;
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV2: FC<IProps> = memo((props) => {
  const { title, moreLink, moreText } = props;
  return (
    <HeaderV2Wrapper>
      <h3>{title}</h3>
      {moreLink && moreText && <a href={moreLink}>{moreText} &gt;</a>}
    </HeaderV2Wrapper>
  );
});

export default AreaHeaderV2;
