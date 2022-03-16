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
  Separator,
  SongTitle,
  Title,
} from "./styles/global";
import { Item } from "./interfaces";
import { usePagination } from "./hooks/usePagination";

const App = () => {
  const [handleGet, value, pague, setValue, setPague, res, pagues] =
    usePagination();

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
        {res && (
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
        )}

        <Pagination>
          {pague > 0 && (
            <DivPagination
              onClick={pague > 0 ? () => setPague(pague - 1) : () => {}}
            >
              Anterior
            </DivPagination>
          )}
          <DivPagination>{pagues}</DivPagination>
          <DivPagination
            onClick={() => {
              setPague(pague + 1), handleGet();
            }}
          >
            Siguiente
          </DivPagination>
        </Pagination>
      </Div>
    </Container>
  );
};

export default App;
