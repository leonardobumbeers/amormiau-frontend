import { useState, useEffect, Fragment } from "react";

export default function getCats({ cats }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [catsList, setCatsList] = useState([]);

  useEffect(() => {
    fetch("http://amormiau-backend.herokuapp.com/admin/cats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("accessToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCatsList(data.cats);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <h1>Cats</h1>
      <ul>
        {catsList.map((cat) => (
          <li key={cat._id}>
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
