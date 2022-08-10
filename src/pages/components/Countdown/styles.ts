import styled from 'styled-components'

export const CountContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(porps) => porps.theme.gray100};

  display: flex;
  gap: 1rem;

  span {
    background: ${(porps) => porps.theme.gray700};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(porps) => porps.theme.green500};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
