import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';
import {
  colors
} from "@material-ui/core";

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


  mapPayementValues(categoryCount,transactions,total){
        
    transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        if (!categoryCount.hasOwnProperty(o.id.category)) {
          categoryCount[o.id.category] = 0;
          //console.log('----------o.id.category--------------',o.id.category);
        }
        // increment the count based on the type
        //console.log(total,o.id.unitPrice * o.quantity)
        categoryCount[o.id.category] += o.id.unitPrice * o.quantity;
        total[0]=total[0]+o.id.unitPrice * o.quantity;
    });
    //console.log('categoryCount-------------',categoryCount); 
  }



  perDay() {
    //console.log('----------this.dataList--------------',this.dataList);
    const categoryCount={};
    const total=[0]

     {
       if (this.dataList!== undefined) {
        this.dataList
        //.filter((payment) => payment.dateTime > 0)
        //.sort((a, b) => (a.name > b.productName ? 1 : -1))
        .map((x)=>{
          //console.log('x.transactions.category-------------------',x.transactions);
          this.mapPayementValues(categoryCount,x.transactions,total);
        });
      }
    }
    console.log('categoryCount-------------',categoryCount,total); 
    
    //this.findFinalArray(categoryCount,total);
   return (this.findFinalArray(categoryCount,total));
  }
  findFinalArray(categoryCount,total){
    const sorted=Object.entries(categoryCount).sort((a,b) => b[1]-a[1]);
    const colorType=[colors.red[600],colors.green[500],colors.indigo[500],colors.grey[500],colors.orange[600]]
    var highTotal=0;
    const percentageArray=[]
    const priceArray=[]
    const data=[]
    const labels=[]
    for (var i = 0; i < sorted.length; i++) {
      if (sorted.indexOf(sorted[i])>=4 || Math.floor(sorted[i][1]/total*100)===0){
        percentageArray.push({title:"others",value:((total-highTotal)/total*100).toFixed(2),color:colorType[sorted.indexOf(sorted[i])]});
        priceArray.push({name:"others",sales:sorted[i][1]});
        data.push(((total-highTotal)/total*100).toFixed(2));
        labels.push("others")
        break
      }
      else if (sorted.indexOf(sorted[i])<=3){
        percentageArray.push({title:sorted[i][0],value:(sorted[i][1]/total*100).toFixed(2),color:colorType[sorted.indexOf(sorted[i])]})
        priceArray.push({name:sorted[i][0],sales:sorted[i][1]})
        highTotal+=sorted[i][1];
        data.push((sorted[i][1]/total*100).toFixed(2));
        labels.push(sorted[i][0])
      }
    }
    console.log("price..",priceArray)
    return ({percentageArray:percentageArray,priceArray:priceArray,data:data,labels:labels});
  }

}

export default new categoryAnalytics();