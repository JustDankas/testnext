import UserCard from "@/components/userCard";
import React, { Component, useEffect, useState } from "react";
function UsersList({ users }) {
  const [_users, setUsers] = useState([]);
  //   useEffect(() => {
  //     //this does not pre-render, doesnt show up on page source
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setUsers(data);
  //       })
  //       .catch((e) => console.log(e));
  //   }, []);
  return (
    <div>
      Users List:
      <ul>
        {users?.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;

// this gets pre-rendered and shows up on page source
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //   console.log(data);
  return { props: { users: data } };
}
