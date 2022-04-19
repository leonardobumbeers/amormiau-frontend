import { useState, useEffect, Fragment } from "react";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function user() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = fetch(
      "https://amormiau-backend.herokuapp.com/admin/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("accessToken"),
        },
      }
    )
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data.data);
      });
  }, []);

  return (
    <Fragment>
      <Heading as="h1" size="lg" textAlign="center" color="gray.700">
        Users
      </Heading>
      {/* show users aligned in a column */}
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        w="100vw"
        h="100vh"
        boxShadow="lg"
        borderColor="gray.200"
        borderStyle="solid"
      >
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
    </Fragment>
  );
}
