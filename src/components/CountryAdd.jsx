// components/CountryAdd.jsx
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_COUNTRY = gql`
  mutation CreateCountry($name: String!) {
    createCountry(input: { name: $name }) {
      id
      name
    }
  }
`;

const CountryAdd = ({ onCountryAdded }) => {
  const [name, setName] = useState("");

  const [createCountry, { loading }] = useMutation(ADD_COUNTRY, {
    onCompleted: () => {
      setName("");
      if (onCountryAdded) onCountryAdded(); // optional callback to refresh
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      createCountry({ variables: { name } });
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Add Country</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          placeholder="Country name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CountryAdd;
