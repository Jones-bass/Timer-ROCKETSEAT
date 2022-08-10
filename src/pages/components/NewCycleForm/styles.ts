import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(porps) => porps.theme.gray100};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(porps) => porps.theme.gray500};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(porps) => porps.theme.gray100};

  &:focus {
    box-shadow: none;
    border-color: ${(porps) => porps.theme.green500};
  }

  &::placeholder {
    color: ${(porps) => porps.theme.gray600};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(porps) => porps.theme.green500};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
