// components/EmployeeList.jsx
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_EMPLOYEES = gql`
  query {
    employeeDetails {
      name
    }
  }
`;

const EmployeeList = () => {
  const { data, loading, error } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-600">Error loading employees.</p>;

  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">Employees</h4>
      <ul className="list-disc ml-6">
        {data.employeeDetails.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
