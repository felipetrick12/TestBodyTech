import React from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Div,
  DivPagination,
  DivTwo,
  Input,
  Pagination,
  PaginationContainer,
  Separator,
  SongTitle,
  Title,
} from "./styles/global";
import { Item } from "./interfaces";
import { usePagination } from "./hooks/usePagination";

const App = () => {
  const [limit, handleGet, value, pague, setValue, setPague, res] =
    usePagination();

  let pagues = [];
  if (res?.tracks?.total)
    for (
      let index = 0;
      index <
      (Math.ceil(res?.tracks?.total / limit) > 7
        ? 7
        : Math.ceil(res?.tracks?.total / limit));
      index++
    ) {
      pagues.push(
        <PaginationContainer
          style={{
            color: pague === index ? "#AAA" : "#000",
          }}
          onClick={() => setPague(index)}
        >
          {index + 1}
        </PaginationContainer>
      );
    }

  return (
    <Container>
      <Div>
        <DivTwo>
          <img src="./img/spotify.jpeg" width={200} height={100} />
          <Title>Busca tu canción</Title>
        </DivTwo>
        <DivTwo>
          <Button onClick={() => handleGet()}>Buscar</Button>
          <Input
            type={"text"}
            value={value}
            placeholder={"Ej. Bad bunny"}
            onChange={(e) => setValue(e.target.value)}
          />
        </DivTwo>
        <Body>
          {res &&
            res.tracks.items.map((item: Item, index: number) => {
              return (
                <Content key={index}>
                  <SongTitle>Canción: {item?.name}</SongTitle>
                  <Separator>
                    {item?.album.artists.map((artist) => {
                      return <SongTitle>Artista: {artist.name}</SongTitle>;
                    })}
                  </Separator>
                </Content>
              );
            })}
        </Body>

        <Pagination>
          <DivPagination
            onClick={pague > 1 ? () => setPague(pague - 1) : () => {}}
          >
            Anterior
          </DivPagination>
          <DivPagination>{pagues}</DivPagination>
          <DivPagination onClick={() => setPague(pague + 1)}>
            Siguiente
          </DivPagination>
        </Pagination>
      </Div>
    </Container>
  );
};

export default App;
