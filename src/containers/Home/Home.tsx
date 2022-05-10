/* eslint-disable jsx-a11y/alt-text */
import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "components/DefaultLayout";
import { Typography } from "antd";
import Help from './help.png'

import { useIntl } from "react-intl";
import { UserOutlined } from '@ant-design/icons';

interface ICardViewProps {}

interface Props {
  style?: CSSProperties
}

const { Title, Paragraph } = Typography;
const Home: FunctionComponent<ICardViewProps> = (props) => {
  const { formatMessage: fm } = useIntl();

  return (
    <DefaultLayout>
      <Typography>
        <Title>{fm({ id: "title" })}</Title>
        <img src={Help} />
        <Paragraph>
          사용을 위해서는 메타마스크 지갑으로 <b>Ropsten 네트워크</b> 연결 부탁드립니다<br />
          우측 상단의 <UserOutlined /> 버튼을 클릭하세요
        </Paragraph>
      </Typography>
    </DefaultLayout>
  );
};


export default Home;
