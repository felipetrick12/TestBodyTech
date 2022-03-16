import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const DivTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  max-width: 500px;
  max-height: 500px;
  overflow-y: scroll;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #aaa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #707070;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export const SongTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  flex: 1;
  align-self: flex-end;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #fff;
`;

export const Input = styled.input`
  background-color: #fff;
  width: 400px;
  height: 30px;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #1bd760;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;

export const List = styled.button`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #1bd760;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
  max-height: 700px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;

export const Pagination = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  width: 500px;
  bottom: 20px;
  border-radius: 10px;
`;

export const DivPagination = styled.button`
  background-color: #fff;
  border: 2px solid #1bd760;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const PaginationContainer = styled.button`
  max-width: 500px;
`;
