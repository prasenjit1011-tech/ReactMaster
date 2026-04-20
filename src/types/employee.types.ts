export interface Employee {
  id: number;
  name: string;
  email: string;
  salary: number;
  imageUrl: string;
}

export interface EmployeeResponse {
  page: number;
  limit: number;
  data: Employee[];
}