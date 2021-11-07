import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class salesAnalytics {

      
    constructor(){
      
        axios.get(URL.main + URL.salesAnalytics)   
        .then( (response) => {
          console.log('-------------------sales analytics',response.data);
          this.dataList = response.data;
        } )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        });
    
    }


  mapPayementValues(sales,transactions){
    //const date = new Date().toLocaleDateString();
    transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        const saleDate=o.dateTime; 
        //console.log('----------sale.saleDate--------------',saleDate);

        if (!sales.hasOwnProperty(saleDate)) {
          sales[saleDate] =0;
          //console.log('----------sale by saleDate--------------',sales);
        }
        // increment the count based on the type
        sales[saleDate] += o.total;
    });
    console.log('sales by date-------------',sales); 
  }



  perDay() {
    //console.log('----------this.dataList--------------',this.dataList);
    const sales={};

     {
       if (this.dataList!== undefined) {
        //this.dataList
        //.filter((payment) => payment.dateTime > 0)
        //.sort((a, b) => (a.name > b.productName ? 1 : -1))
        
          //console.log('e.transactions.category-------------------',e.transactions);
          this.mapPayementValues(sales,this.dataList);
        }
    }
    console.log('---------------sales per day-------------',sales); 
    const salesDays=[];
    Object.entries(sales)
    .sort((a,b)=>a[0]>b[0]?1:-1)
    .slice(0, 7)
    .map(e=>{
      salesDays.push({"date":e[0].substring(0,10),"sales":e[1].toFixed(2)})
    }
    );    
    return salesDays;
  }

}

export default new salesAnalytics();