import styled from 'styled-components'

export const CardListWrapper: any = styled.div` 
  display: flex; 
  flex-wrap: wrap;

  & > .child{ 
    flex: 1 1 25%;
    padding: 5px; 
    box-sizing: border-box;
    text-align: center;
  }
`