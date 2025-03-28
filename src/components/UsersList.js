import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UsersList() {
  const [data, setData] = useState();
  const fetchUsers = async () => {
    const getUsers = await axios.get("https://reqres.in/api/users?page=2");
    console.log(getUsers?.data?.data);
    setData(getUsers?.data?.data);
  };
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div
        style={{
          width: "80%",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#007BFF", color: "white" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Id
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                First Name
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Last Name
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, index) => {
              console.log(d.first_name);
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                    transition: "0.3s",
                  }}
                >
                  <td
                    style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
                  >
                    {d.id}
                  </td>
                  <td
                    style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
                  >
                    {d.first_name}
                  </td>
                  <td
                    style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
                  >
                    {d.last_name}
                  </td>
                  <td
                    style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
                  >
                    {d.email}
                  </td>
                  <td>
                    {/* <UsersAction /> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
