import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class salesAnalytics {

      
    /*constructor(dur){
      this.duration=dur;
        //axios.all([
          //axios.get(URL.main + URL.salesAnalytics),
          console.log("duration.....",dur,this.duration)
          axios.get(URL.main + URL.salesAnalyticsDuration+this.duration)  
        //])
        .then((response)=>{
          //axios.spread((...responses) => {
              console.log('-------------------sales analytics',response.data);
              //this.dataList = response.data;
              this.durationList=response.data;
        })//} ))
          .catch((error) => {
            console.log(error);
            alert(error, (window.location = URL.management));
          })
    }*/
    mapDays(resp){
      var maxi=0
      const answer=[];
      const day=new Date();
      const date=day.getDate();
      var lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() -6);
      const stDate=lastWeek.getDate();
      const month=new Date().getMonth();
      const year=new Date().getFullYear();
      for (var i = 0; i < resp.length; i++) {
          const d=resp[i]._id+"-"+month+"-"+year
          answer.push({_id:d,sales:resp[i].total})
          if (resp[i].total>maxi){
            maxi=resp[i].total;
          }
      }return ({maximum:maxi,salesArray:answer})
    }
    
    mapMonth(resp,dur){
      const selectedMonth=dur.split("-")[1];
      var maxi=0
      const answer=[];
      const year=new Date().getFullYear();
      for (var i = 0; i < resp.length; i++) {
          const d=resp[i]._id+"-"+selectedMonth+"-"+year
          answer.push({_id:d,sales:resp[i].total})
          if (resp[i].total>maxi){
            maxi=resp[i].total;
          }
      }return ({maximum:maxi,salesArray:answer})
    }


    mapYear(resp){
      const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
      var maxi=0
      const answer=[];
      for (var i = 0; i < resp.length; i++) {
          const d=months[resp[i]._id-1];
          answer.push({_id:d,sales:resp[i].total})
          if (resp[i].total>maxi){
            maxi=resp[i].total;
          }
      }return ({maximum:maxi,salesArray:answer})

    }
    /*perDuration(dur){
      var resp=[]
      console.log("duration...",dur,typeof dur)
      console.log("duration.....",dur)
      axios.get(URL.main + URL.salesAnalyticsDuration+"/"+dur)  
        .then((response)=>{
              console.log('-------------------sales analytics',response.data);
              resp=response.data;
              //console.log(resp,"resp")
              if (dur.includes("Day")){
                console.log(resp,"resp")
                console.log(this.mapDays(resp),"aaaaa")
                const x=this.mapDays(resp)
                return x;
              }
              if (dur.includes("Month")){
                console.log(resp,"resp")
                //const x=this.mapMonths(resp);
              }
        })
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        })
      
    }*/
    


  /*mapPayementValues(sales,transactions){
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
    var maximum=0;
    console.log("sales checking...",sales)
    Object.entries(sales)
    .sort((a,b)=>a[0]<b[0]?1:-1)
    .slice(0, 7)
    .reverse()
    .map(e=>{
      if (e[1]>maximum){
        maximum=e[1]
      }
      salesDays.push({"date":e[0].substring(0,10),"sales":e[1].toFixed(2)
    })
    }
    );   
     
    return {salesDays:salesDays,maximum:maximum};
  }*/

}

export default new salesAnalytics();