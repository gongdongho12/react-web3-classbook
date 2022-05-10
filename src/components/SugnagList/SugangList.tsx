import { ApiFilled } from '@ant-design/icons';
import { useWeb3React } from '@web3-react/core';
import { Button } from 'antd';
import { web3 as web3API } from 'api';
import Web3 from 'web3';
import { Contract } from "@ethersproject/contracts";
import SugangCard from 'components/SugangCard';
import { sugang, SUGANG_STATUS } from 'containers/Sugang/meta';
import React, { FunctionComponent, useCallback } from 'react';
import detectCurrentProvider from 'utils/detectCurrentProvider';
import { CardListWrapper } from './SugangListStyle';
import { abi, contractAddress } from './contract';

interface ISugangListProps {
}

const getStatusString = (status) => {
  switch (status) {
    case SUGANG_STATUS.ING:
      return '수강중';
    case SUGANG_STATUS.END:
      return '수강 종료'
    case SUGANG_STATUS.NOT:
    default:
      return '미수강'
  }
}

const SugangList: FunctionComponent<ISugangListProps> = (props) => {
  const { library, chainId, account, active, activate, deactivate } = useWeb3React();

  const postSugang = useCallback(() => {
    console.log('test', active)
    if (active) {
      const SimpleStorage = new Contract(contractAddress, abi, library.getSigner());
      // SimpleStorage.set(23).then((res) => {
      //   console.log('set', res)
      // })

      SimpleStorage.get().then((res: any) => {
        console.log('get', parseInt(res?._hex, 16))
      })
    }
  }, [active, library])
  
  const sugangRender = useCallback(({ id, name, professor, status }) => {
    return <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'start', height: '90px' }}>
      <div>
        <b>
          {"교수: "}
        </b>
        <span>
          {professor}
        </span>
      </div>
      <div style={{ marginTop: '5px' }}>
        <b>
          {"상태: "}
        </b>
        <span>
          {getStatusString(status)}
        </span>
      </div>
      {
        status === SUGANG_STATUS.NOT && <Button style={{ width: '100%', marginTop: 5 }} onClick={() => postSugang()}>
          수강신청
        </Button>
      }
      {
        status === SUGANG_STATUS.ING && <Button type={'primary'} style={{ width: '100%', marginTop: 5 }}>
          출석체크
        </Button>
      }
    </div>
  }, [postSugang])

  return <CardListWrapper>
    {
      sugang.map(s => {
        return <div key={s.id} className={'child'}>
          <SugangCard title={s.name}>
            {sugangRender(s)}
          </SugangCard>
        </div>
      })
    }
  </CardListWrapper>;
};

export default SugangList;
