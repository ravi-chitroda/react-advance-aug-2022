import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  //useEffect can not be used async await  so we have to create function outside the useEffect first
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>FetchData with useEffect</h2>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetch;
