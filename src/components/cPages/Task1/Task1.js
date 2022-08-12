import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Task1/Task1.scss";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
            limit: 100,
          },
        });
        setData(results.data.data);
      } catch {}
    };
    fetchData();
  }, []);

  const gifRender = () => {
    return data.map((gif) => {
      return (
        <div key={gif.id} className={styles.bodyContainer}>
          <img src={gif.images.fixed_height.url} />
        </div>
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (search === "") {
      gifRender();
    } else {
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
            q: search,
            limit: 20,
          },
        });
        setData(results.data.data);
      } catch {}
    }
  };

  return (
    <div className="Giphy">
      <form className="formContainer">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search..."
          className="searchInput"
        />
        <button onClick={handleSubmit} type="submit" className="searchButton">
          Search
        </button>
      </form>
      <br />
      {gifRender()}
    </div>
  );
};

export default Giphy;
