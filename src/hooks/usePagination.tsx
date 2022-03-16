import clientAxios from "../../config/clientAxios";
import { useEffect, useState } from "react";
import { ResponseSpotify } from "src/interfaces";

export const usePagination = () => {
  const limit = 10;
  const [value, setValue] = useState<string>("");
  const [pague, setPague] = useState<number>(0);
  const [res, setRes] = useState<ResponseSpotify | any>(false);

  useEffect(() => {
    handleGet();
  }, [pague]);

  const handleGet = async () => {
    try {
      const resApi = await clientAxios.get<ResponseSpotify>(
        `/v1/search?type=track&include_external=audio&q=${value}&limit=${limit}&offset=${
          pague * limit
        }`
      );
      setRes(resApi?.data);
      if (res?.data?.tracks?.total === 0) {
        alert("No encontramos tu busqueda");
      }
    } catch (error) {
      console.log(error);
      alert("Ocurrió un error al intentar buscar la canción");
    }
  };

  return [limit, handleGet, value, pague, setValue, setPague, res];
};
