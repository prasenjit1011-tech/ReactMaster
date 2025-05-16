// components/CountryList.jsx
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`query {countryDetails {id, name, stateDetails {id, name}}}`;

const CountryList = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p className="text-red-600">Error loading countries.</p>;

  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">Countries</h4>
      <ul className="list-disc ml-6">
        {data.countryDetails.map((country) => (
          <li key={country.id}>
            <strong>{country.name}</strong>
            <ul className="list-circle ml-5">
              {country.stateDetails.map((state) => (
                <li key={state.id}>{state.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
