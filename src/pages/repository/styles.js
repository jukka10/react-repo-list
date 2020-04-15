import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 30px;
  }
  h1 {
    color: #222;
    margin-top: 10px;
  }
  p {
    color: #666;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    max-width: 400px;
    line-height: 1.4;
  }
  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 14px;
  }
`;
export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px;
    align-items: center;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 60px;
      border-radius: 50%;
      border: 1px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 10px;

      strong {
        font-size: 16px;

        a {
          color: #222;
          text-decoration: none;

          &:hover {
            color: #7159c1;
          }
        }
      }
      p {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
      }
    }
  }
`;
