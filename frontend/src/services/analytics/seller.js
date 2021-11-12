//import axios from 'axios';
//import authHeader from '../authHeader';
//import URL from '../../config';


class sellerAnalytics {
    getName(arr){
      var output=[]
      for (var i = 0; i < arr.length; i++) {
        output.push({
          id : arr[i].seller[0].idNumber,
          name : arr[i].seller[0].firstName + " "+arr[i].seller[0].lastName,
          sales:arr[i].total
        })
      }console.log("out",output)
      return output
    }
}

export default new sellerAnalytics();