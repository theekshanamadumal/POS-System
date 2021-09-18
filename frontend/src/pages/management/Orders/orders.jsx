import React from "react";
import "./orders.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { orderRows } from "../../../dataCollection";

export default function Order() {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "shopName",
      headerName: "Shop Name",
      width: 300,
      editable: true,
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      width: 100,
      editable: true,
    },
    {
      field: "orderedDate",
      headerName: "Ordered Date",
      width: 200,
      editable: true,
      type: "date",
    },
    {
      field: "deadline",
      headerName: "Delivery Deadline",
      width: 200,
      editable: true,
      type: "date",
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionButton">
            <Link to={"/management/order/" + params.row.id}>
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
    <div className="product">
      <div className="container">
        <h1 className="heading">Order Details</h1>
        <Link to="/management/addOrders">
          <button className="addProduct">Add New Order</button>
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
