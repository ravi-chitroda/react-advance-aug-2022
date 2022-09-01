import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUsers(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  });

  if (isLoading) {
    return <h1>Loading.......</h1>;
  }
  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <div>
      <h1>{users}</h1>
    </div>
  );
};

export default MultipleReturn;
