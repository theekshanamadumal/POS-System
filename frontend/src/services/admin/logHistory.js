import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class logHistory {

      
    constructor(){
      
        axios.get(URL.main + URL.signinHistory)   
        .then( (response) => {
          console.log('-------------------signins analytics',response.data);
          this.dataList = response.data;
        } )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.itAdmin));
        });
    
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



  recent() {
    //console.log('----------this.dataList--------------',this.dataList);
    const signins={};

     {
       if (this.dataList!== undefined) {
        //this.dataList
        //.filter((payment) => payment.dateTime > 0)
        //.sort((a, b) => (a.name > b.productName ? 1 : -1))
        
          //console.log('e.transactions.category-------------------',e.transactions);
          //this.mapValues(signups,this.dataList);
        }
    }
    console.log('---------------recent signins-------------',signins); 
    return this.dataList ;
  }

}

export default new logHistory();