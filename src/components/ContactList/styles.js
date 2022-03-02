import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;

`;

export const Header = styled.div`
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

export const ListContainer = styled.div`
  margin-top: 40px;

    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  margin-top: 6px;
  background: #fff;
  height: 96px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
      background: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      padding: 3px 6px;
      border-radius: 4px;
      font-size: 12px;
      text-transform: uppercase;
      margin-left: 8px;
      }
    }
      span {
        display: block;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray[200]};
      }

  }
  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
