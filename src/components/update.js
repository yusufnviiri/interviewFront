import { useQuery } from "react-query";
import axios from "axios";

export const useUpdateReply = (active, data) => {
  return useQuery(
    ["update", active],
    async () => {
      const { updatedReply } = await axios.put(
        `http://localhost:3000/questions/${active}/reply/${active}`,
        { selection: data }
      );

      return updatedReply;
    },

    { keepPreviousData: true }
  );
};
