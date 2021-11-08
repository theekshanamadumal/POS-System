import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class sellerAnalytics {

      
    constructor(){
      
        axios.get(URL.main + URL.sellersAnalytics)   
        .then( (response) => {
          console.log('-------------------sellers analytics',response.data);
          this.dataList = response.data;
        } )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        });
    
    }


  mapPayementValues(sales,transactions){
        
    transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        const seller=o.sellerId.idNumber ;
        if (!sales.hasOwnProperty(seller)) {
          sales[seller] ={};
          sales[seller].sale = 0;
          sales[seller].name = o.sellerId.firstName + ' '+o.sellerId.lastName;
          //console.log('----------seller.idNumber--------------',seller);
        }
        // increment the count based on the type
        sales[seller].sale += o.total;
    });
    //console.log('sales-------------',sales); 
  }



  perDay() {
    console.log('ssss----------this.dataList--------------',this.dataList);
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
    console.log('sales-------------',sales); 
    return(this.findFinal(sales));
    //return sales ;
  }
  findFinal(sales){

    const sorted=Object.entries(sales).sort((a,b) => b[1].sale-a[1].sale);
    const salesAll=[]
    for (var i = 0; i < sorted.length; i++) {
      salesAll.push({id:sorted[i][0],name:sorted[i][1].name,income:sorted[i][1].sale.toFixed(2)});
    }
    console.log("sorted Sellers..",sorted)
    if (sorted.lenght>6){
      sorted.slice(0, 7);
    }
    return ({sorted:sorted,salesAll:salesAll})
  }

}

export default new sellerAnalytics();