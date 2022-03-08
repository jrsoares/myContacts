import styled from 'styled-components';

export const Container = styled.header`
margin-bottom: 24px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      transform: rotate(-90deg)
    }
    small {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
      margin-left: 8px;

    }
  }
`;
