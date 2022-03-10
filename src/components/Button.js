import styled from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;
  border: none ;
  background: ${({ theme }) => theme.colors.primary.main} ;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff ;
  font-weight: bold ;
  font-size: 16px ;
  border-radius: 4px ;
  transition: background 0.2s ease-in;

  &:hover {
    filter: brightness(0.8) ;
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.main} ;
  }

  &[disabled] {
    background: #ccc ;
    cursor: default;
  }
`;
