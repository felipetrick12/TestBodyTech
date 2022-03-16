import clientAxios from "../../config/clientAxios";
import { useState } from "react";
import { ResponseSpotify } from "src/interfaces";
import { PaginationContainer } from "../../src/styles/global";

export const usePagination = () => {
  const limit = 10;
  const [value, setValue] = useState<string>("");
  const [pague, setPague] = useState<number>(0);
  const [res, setRes] = useState<ResponseSpotify | any>(false);

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

  const handleGet = async () => {
    try {
      const resApi = await clientAxios.get<ResponseSpotify>(
        `/v1/search?type=track&include_external=audio&q=${value}&limit=${limit}&offset=${
          pague * limit
        }`
      );
      setRes(resApi?.data);
      if (res?.data?.tracks?.items.lenght === 0) {
        alert("No encontramos tu busqueda");
      }
    } catch (error) {
      alert("Ocurrió un error al intentar buscar la canción, (Renovar token)");
    }
  };

  return [handleGet, value, pague, setValue, setPague, res, pagues];
};
