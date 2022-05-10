import React, { FunctionComponent } from 'react';
import DefaultLayout from 'components/DefaultLayout';
import SugangList from 'components/SugnagList';

interface ISugnagProps {
}

const Vote: FunctionComponent<ISugnagProps> = (props) => {
  return <DefaultLayout>
    <SugangList />
  </DefaultLayout>
};

export default Vote;
