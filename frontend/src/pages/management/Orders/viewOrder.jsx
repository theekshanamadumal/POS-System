import axios from "axios";
import URL from "../../../config";
import "./viewOrder.css";
import InvoiceDetails from "../../../components/Invoice/invoiceDetails";
import InvoiceList from "../../../components/Invoice/invoiceList";
import {React,useState,useEffect} from 'react';

export default function ViewOrder({match}) {
  const [invoiceData,setInvoiceData]=useState([]);
  const [sellerData,setSellerData]=useState([]);
  const [shopName,setShopName]=useState("");
  const [transactions,setTransactions]=useState([]);
  const [id,setId]=useState("");
  const [total,setTotal]=useState(0.00);

  useEffect(() => {
      axios
        .get(URL.invoice + "/" + match.params.id)
        .then((response) => {
          console.log("response...",response.data)
          setTransactions(response.data.transactions);
          setInvoiceData(response.data);
          setSellerData(response.data.sellerId);
          setShopName(response.data.shopId.shopName);
          setId(response.data._id.substr(19));
          setTotal(response.data.total.toFixed(2));
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        }); 
  }, [])

  return (
    <div className="viewOrder">
        <div className="detailCont">
          <InvoiceDetails
            className="contain"
            invoiceData={invoiceData}
            sellerData={sellerData}
            shopName={shopName}
            id={id}
          />
          <InvoiceList
            className="invTab"
            invoices={invoiceData}
            transactions={transactions}
            total={total}
          />
        </div>
      </div>
  )
}