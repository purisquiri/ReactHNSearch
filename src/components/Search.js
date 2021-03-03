import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSearch } from "../redux";

export default function Search() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
    addSearch();
  };

  const fetchData = async () => {
    const result = await axios(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setData(result.data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
