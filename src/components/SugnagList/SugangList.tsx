import { ApiFilled, SyncOutlined } from '@ant-design/icons';
import { useWeb3React } from '@web3-react/core';
import { Button } from 'antd';
import { Contract } from "@ethersproject/contracts";
import SugangCard from 'components/SugangCard';
import { sugang } from 'containers/Vote/meta';
import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { CardListWrapper } from './SugangListStyle';
import { abi, contractAddress } from './contract';

interface ISugangListProps {
}

const SugangList: FunctionComponent<ISugangListProps> = (props) => {
  const { library, chainId, account, active, activate, deactivate } = useWeb3React();

  const [loading, setLoading] = useState(false)
  const [lee, setLee] = useState<number | undefined>(undefined)
  const [kim, setKim] = useState<number | undefined>(undefined)
  const Voting = useMemo(() => new Contract(contractAddress, abi, library?.getSigner()), [library]);

  const setVote = useCallback((name: string) => {
    console.log('test', active)
    if (active && Voting) {
      setLoading(true)
      Voting?.vodeForCandiodate(name).then((res: any) => {
        setLoading(false)
      })
    }
  }, [Voting, active])

  const getVote = useCallback((name: string) => {
    console.log('test', active)
    if (active && Voting) {
      setLoading(true)
      Voting?.totalVotesFor(name).then((res: any) => {
        setLoading(false)
        if (name === '이상환') {
          setLee(parseInt(res?._hex, 16))
        } else if (name === "김영만") {
          setKim(parseInt(res?._hex, 16))
        }
        console.log('get', name, parseInt(res?._hex, 16))
      })
    }
  }, [Voting, active])

  const refresh = useCallback(
    () => {
      getVote('이상환')
      getVote('김영만')
    },
    [getVote],
  )
  

  useEffect(() => {
    refresh()
  }, [])
  
  const sugangRender = useCallback(({ id, name, professor, status }) => {
    const result = professor === "이상환" ? (lee !== undefined ? lee : "?") : (kim !== undefined ? kim : "?")
    console.log('sugangRender', professor, result, kim, lee)
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
          {"투표 수: "}
        </b>
        <span>
          {result}
        </span>
      </div>
      <Button type={'primary'} style={{ width: '100%', marginTop: 5 }} onClick={() => setVote(professor)}>
        투표
      </Button>
    </div>
  }, [getVote, kim, lee])

  const render = useMemo(() => {
    return sugang.map(s => {
      return <div key={s.id} className={'child'}>
        <SugangCard title={s.name}>
          {sugangRender(s)}
        </SugangCard>
      </div>
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sugangRender, loading])

  return <div>
    <Button type={"primary"} ghost onClick={() => refresh()} >
      <SyncOutlined />
      새로고침
    </Button>
    <CardListWrapper>
      {render}
    </CardListWrapper>
  </div>
};

export default SugangList;
