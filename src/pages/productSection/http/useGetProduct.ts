import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import { generalPath } from "../../../utils/apiEndpoints";


async function fetchData() {
  const { data } = await axiosInstance.get(`${generalPath.getProductList}`);
  return data.data;
}

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["home"],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
};
