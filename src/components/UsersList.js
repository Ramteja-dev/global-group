import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Dialog, Button } from "@radix-ui/themes";
import { FaceIcon } from "@radix-ui/react-icons";

export default function UsersList() {
  const [data, setData] = useState([]);
  const [userListPage, setUserListPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const fetchUsers = async () => {
    const getUsers = await axios.get(`https://reqres.in/api/users?page=${userListPage}`);
    setData(getUsers?.data?.data);
    setTotalPages(getUsers?.data?.total_pages);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      alert("User deleted successfully!");
      setData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      alert("Failed to delete user. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [userListPage]);

  return (
    <Flex direction="column" gap="2">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
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
                <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Id</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>First Name</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Last Name</th>
                <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                    transition: "0.3s",
                  }}
                >
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{d.id}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{d.first_name}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{d.last_name}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{d.email}</td>
                  <td>
                    <Delete onDelete={async () => await deleteUser(d.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 10%" }}>
        <Button onClick={() => setUserListPage((prev) => Math.max(prev - 1, 1))} disabled={userListPage === 1}>
          Previous
        </Button>
        <span style={{ margin: "0 10px", alignSelf: "center" }}>Page {userListPage} of {totalPages}</span>
        <Button onClick={() => setUserListPage((prev) => Math.min(prev + 1, totalPages))} disabled={userListPage === totalPages}>
          Next
        </Button>
      </div>
    </Flex>
  );
}

const Delete = ({ onDelete }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Delete</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Delete User</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Are you sure you want to delete user?
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={onDelete}>Delete</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Flex, Dialog, Button } from "@radix-ui/themes";
// import { FaceIcon } from "@radix-ui/react-icons";

// export default function UsersList() {
//   const [data, setData] = useState();
//   const [userListPage, setUserListPage] = useState(1);
//   const fetchUsers = async () => {
//     const getUsers = await axios.get(
//       `https://reqres.in/api/users?page=${userListPage}`
//     );
//     console.log(getUsers?.data?.data);
//     setData(getUsers?.data?.data);
//   };
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`https://reqres.in/api/users/${id}`);
//       alert("User deleted successfully!");
//       setData((prevData) => prevData.filter((user) => user.id !== id));
//     } catch (error) {
//       alert("Failed to delete user. Please try again.");
//     }
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   return (
//     <Flex direction="column" gap="2">
//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//       >
//         <div
//           style={{
//             width: "80%",
//             borderRadius: "10px",
//             overflow: "hidden",
//             boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//           }}
//         >
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               textAlign: "left",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#007BFF", color: "white" }}>
//                 <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
//                   Id
//                 </th>
//                 <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
//                   First Name
//                 </th>
//                 <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
//                   Last Name
//                 </th>
//                 <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
//                   Email
//                 </th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {data?.map((d, index) => {
//                 console.log(d.first_name);
//                 return (
//                   <tr
//                     key={index}
//                     style={{
//                       backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
//                       transition: "0.3s",
//                     }}
//                   >
//                     <td
//                       style={{
//                         padding: "12px",
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       {d.id}
//                     </td>
//                     <td
//                       style={{
//                         padding: "12px",
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       {d.first_name}
//                     </td>
//                     <td
//                       style={{
//                         padding: "12px",
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       {d.last_name}
//                     </td>
//                     <td
//                       style={{
//                         padding: "12px",
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       {d.email}
//                     </td>
//                     <td>
//                       <Delete onDelete={async () => await deleteUser(d.id)} />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Flex>
//   );
// }

// const Delete = ({ onDelete }) => {
//   return (
//     <Dialog.Root>
//       <Dialog.Trigger>
//         <Button>Delete</Button>
//       </Dialog.Trigger>

//       <Dialog.Content maxWidth="450px">
//         <Dialog.Title>Delete User</Dialog.Title>
//         <Dialog.Description size="2" mb="4">
//           Are you sure you want to delete user?
//         </Dialog.Description>

//         <Flex direction="column" gap="3"></Flex>

//         <Flex gap="3" mt="4" justify="end">
//           <Dialog.Close>
//             <Button variant="soft" color="gray">
//               Cancel
//             </Button>
//           </Dialog.Close>
//           <Dialog.Close>
//             <Button
//               onClick={() => {
//                 onDelete();
//               }}
//             >
//               Delete
//             </Button>
//           </Dialog.Close>
//         </Flex>
//       </Dialog.Content>
//     </Dialog.Root>
//   );
// };
