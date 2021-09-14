import { useState } from "react";
import "./salesPerson.css";
import { Link } from "react-router-dom";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { rows } from "../../../dummyData";
import { Delete } from "@material-ui/icons";

export default function SalesPerson() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            <span>{params.row.fullName}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: true,
    },
    {
      field: "phoneNo",
      headerName: "Phone Number",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionButton">
            <Link to={"/SalesPerson/" + params.row.id}>
              <button className="editButton">Edit</button>
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
      <h1 className="heading">Salespersons</h1>
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
