import React, { useState, useEffect } from "react";
import axios from "axios";
import Tag from "../components/Tag";

const TagsList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/graffiti")
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tagList = () => {
    return tags.map((current) => {
      return <Tag tag={current} key={current._id} />;
    });
  };

  return (
    <div>
      <h3>Tags List</h3>
      <div>{tagList()}</div>
    </div>
  );
};

export default TagsList;
