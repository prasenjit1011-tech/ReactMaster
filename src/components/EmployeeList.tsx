import { useState } from "react";
import { useEmployees } from "../hooks/useEmployees";
import EmployeeCard from "./EmployeeCard";
import Pagination from "./Pagination";

const LIMIT = 9;

const EmployeeList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching } = useEmployees(page, LIMIT);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading employees</p>;

  return (
    <div>
      {isFetching && <p>Loading new page...</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {data.data.map((emp) => (
          <EmployeeCard key={emp.id} emp={emp} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        hasNext={data.data.length === LIMIT}
      />
    </div>
  );
};

export default EmployeeList;