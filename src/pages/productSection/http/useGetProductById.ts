import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import { generalPath } from "../../../utils/apiEndpoints";


async function fetchData(id) {
  const { data } = await axiosInstance.get(`${generalPath.getProductById}/${id}`);
  return data;
}

export const useGetProductById = (id) => {
  return useQuery({
    queryKey: ["home" , id],
    queryFn: ()=>fetchData(id),
    refetchOnWindowFocus: false,
  });
};
