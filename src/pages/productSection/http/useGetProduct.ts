import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import { generalPath } from "../../../utils/apiEndpoints";


async function fetchData(activeCategory) {
  const { data } = await axiosInstance.get(`${generalPath.getProductList}/${activeCategory}`);
  return data.data;
}

export const useGetProduct = (activeCategory) => {
  return useQuery({
    queryKey: ["home" , activeCategory],
    queryFn: ()=>fetchData(activeCategory),
    refetchOnWindowFocus: false,
  });
};
