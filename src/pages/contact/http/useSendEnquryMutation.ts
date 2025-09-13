import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import { generalPath } from "../../../utils/apiEndpoints";
import toast from "react-hot-toast";



async function useEnquryMutation(data) {
  return await axiosInstance.post(
    `${generalPath.sendEnqury}`,
    data
  );
}

const useSendEnquryMutation = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: useEnquryMutation,

    onSuccess: async (res) => {
      queryClient.invalidateQueries({
        queryKey: [generalPath.sendEnqury],
        refetchType: "all",
      });
      toast.success((res.data.message));
    },
    onError: (error) => {
      toast.error((error.response?.data?.message) || t("An error occurred"));
    },
  });
};

export default useSendEnquryMutation;
