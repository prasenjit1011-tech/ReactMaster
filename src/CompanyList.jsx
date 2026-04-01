import React, { useEffect, useState } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    let allData = [];

    // Faker API max 1000 per request
    for (let i = 0; i < 10; i++) {
      const res = await axios.get(
        `https://fakerapi.it/api/v1/companies?_quantity=10&_seed=${i}`
      );
      allData = [...allData, ...res.data.data];
    }

    setCompanies(allData);
  };

  const Row = ({ index, style }) => {
    const company = companies[index];
    console.log("Rendering row:", index);
    console.log("Company data:", company[index]);
    console.log("================================");
    if (!company) return null;

    return (
      <div style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ddd"
      }}>
        <span>{index + 1} | {company.name}</span>
      </div>
    );
  };

  return (
    <div>
      <h2>Companies List (Virtualized 510,000 rows)</h2>

      <List
        height={500}
        itemCount={companies.length}
        itemSize={15}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
}