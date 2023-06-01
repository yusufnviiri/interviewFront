import { useQuery } from "react-query";
import axios from "axios";

export const useUsers = (id) => {
  return useQuery(
    ["data", id],
    async () => {
      const { data } = await axios.get(
        `http://localhost:3000/questions/${id}/reply/${id}`
      );

      return data;
    },

    { keepPreviousData: true }
  );
};
