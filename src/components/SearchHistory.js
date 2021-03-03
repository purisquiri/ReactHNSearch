import React from "react";
import { useSelector } from "react-redux";

export default function SearchHistory() {
  const searchHistory = useSelector((state) => state.history);
  return (
    <div>
      {searchHistory?.map((search) => (
        <div>{search}</div>
      ))}
    </div>
  );
}
