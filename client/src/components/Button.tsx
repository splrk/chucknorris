import styled from 'styled-components';

export default styled.button`
  background: linear-gradient(${(props): string => `${props.theme.mainLight}, ${props.theme.main}`});
  border: 1px solid #3b170c;
  color: ${(props): string => props.theme.mainText};
  border-radius: 5px;
`;
