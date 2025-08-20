import axios from "axios";

export const fetchCountriesApi = async () => {
  const res = await axios.get(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  return res.data;
};