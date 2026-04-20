import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../api/employee.api";

export const useEmployees = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["employees", page, limit],
    queryFn: () => fetchEmployees(page, limit),
    keepPreviousData: true,
  });
};