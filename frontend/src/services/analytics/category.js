import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class categoryAnalytics {

      
    constructor(){
      
        axios.get(URL.main + URL.categoryAnalytics)   
        .then( (response) => {
          console.log('-------------------this.response',response.data);
          this.dataList = response.data;
        } )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        });
    
    }


  mapPayementValues(categoryCount,transactions){
        
    transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        if (!categoryCount.hasOwnProperty(o.id.category)) {
          categoryCount[o.id.category] = 0;
          console.log('----------o.id.category--------------',o.id.category);
        }
        // increment the count based on the type
        categoryCount[o.id.category] += o.id.unitPrice * o.quantity;
    });
    //console.log('categoryCount-------------',categoryCount); 
  }



  perDay() {
    //console.log('----------this.dataList--------------',this.dataList);
    const categoryCount={};

     {
       if (this.dataList!== undefined) {
        this.dataList
        //.filter((payment) => payment.dateTime > 0)
        //.sort((a, b) => (a.name > b.productName ? 1 : -1))
        .map((e)=>{
          //console.log('e.transactions.category-------------------',e.transactions);
          this.mapPayementValues(categoryCount,e.transactions);
        });
      }
    }
    console.log('categoryCount-------------',categoryCount); 
    return categoryCount ;
  }

}

export default new categoryAnalytics();