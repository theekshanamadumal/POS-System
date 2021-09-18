import { useState } from "react";
import "./salesPerson.css";
import { Link } from "react-router-dom";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { rows } from "../../../dataCollection";
import { Delete, SportsMma } from "@material-ui/icons";

export default function SalesPerson() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.firstName}
            <span> </span>
            {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "avatar",
      headerName: "Profile",
      width: 100,
      renderCell: (params) => {
        return <img className="image" src={params.row.avatar} alt=""></img>;
      },
    },
    {
      field: "city",
      headerName: "City",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "joinedDate",
      headerName: "Joined Date",
      width: 120,
    },
    {
      field: "phoneNo",
      headerName: "Phone Number",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionButton">
            <Link to={"/management/salesPerson/" + params.row.id}>
              <button className="editButton">View</button>
            </Link>

            <Delete
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="salesPerson">
      <div className="container">
        <h1 className="heading">Salespersons</h1>
        <Link to="/management/salesperson/addSalesperson">
          <button className="addUser">Add New Salesperson</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
