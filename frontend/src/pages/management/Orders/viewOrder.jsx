import React from 'react';
import InvoiceDetails from '../../../components/Invoice/invoiceDetails';
import InvoiceList from '../../../components/Invoice/invoiceList';
import "./viewOrder.css";
import { invoiceRows } from '../../../dataCollection';

export default function viewOrder() {
    return (
        <div className="viewOrder">
            <div className="detailCont">
                <InvoiceDetails className="contain"/>
                <InvoiceList className="invTab" invoices={invoiceRows} />  

            </div>
                     
        </div>
    )
}
