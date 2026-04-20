import { Employee } from "../types/employee.types";

const EmployeeCard = ({ emp }: { emp: Employee }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={emp.imageUrl} alt={emp.name} width="100%" />
      <h4>{emp.name}</h4>
      <p>{emp.email}</p>
      <p>₹{emp.salary}</p>
    </div>
  );
};

export default EmployeeCard;