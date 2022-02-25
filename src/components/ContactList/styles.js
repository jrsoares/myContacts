import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    font-weight: bold;
    color: "#222";
  }

  a {
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main} ;
      color: #fff;
    }
  }
`;
