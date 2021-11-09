import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class signupHistory {

      
    constructor(){
      
        
    
    }


  mapValues(signups,transactions){
    //const date = new Date().toLocaleDateString();
    transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        const saleDate=o.dateTime; 
        console.log('----------sale.saleDate--------------',saleDate);

        if (!signups.hasOwnProperty(saleDate)) {
          signups[saleDate] =0;
          console.log('----------sale by saleDate--------------',signups);
        }
        // increment the count based on the type
        signups[saleDate] += o.total;
    });
    console.log('signups by date-------------',signups); 
  }



  recent(dataList) {
    //console.log('----------this.dataList--------------',this.dataList);
    const signups={};

     {
       if (dataList!== undefined) {
        //this.dataList
        //.filter((payment) => payment.dateTime > 0)
        //.sort((a, b) => (a.name > b.productName ? 1 : -1))
        
          //console.log('e.transactions.category-------------------',e.transactions);
          //this.mapValues(signups,this.dataList);
        }
    }
    console.log('---------------recent signups-------------',signups); 
    return dataList ;
  }

}

export default new signupHistory();