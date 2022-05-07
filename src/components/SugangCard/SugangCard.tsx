import { Card } from 'antd';
import React, { FunctionComponent } from 'react';

interface ISugangCardProps {
  title?: any,
  style?: any,
  children?: any
}

const SugangCard: FunctionComponent<ISugangCardProps> = ({ title, style, children }) => {
  return <div>
    <Card title={title} style={style}>
      {children}
    </Card>
  </div>;
};

export default SugangCard;
