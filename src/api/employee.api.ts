import { api } from "../lib/axios";
import { EmployeeResponse } from "../types/employee.types";

export const fetchEmployees = async (
  page: number,
  limit: number
): Promise<EmployeeResponse> => {
  const res = await api.get(`/employees?page=${page}&limit=${limit}`);
  return res.data;
};