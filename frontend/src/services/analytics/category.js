import axios from 'axios';
import authHeader from '../authHeader';
import URL from '../../config';


class categoryAnalytics {

      
    constructor(){
        axios.get(URL.main + URL.categoryAnalytics)   
        .then(  )
        .catch((error) => {
          console.log(error);
          alert(error, (window.location = URL.management));
        });
    
    }

  getForDay() {
    return "aaaaaaaaaaaaaaaa";
  }

}

export default new categoryAnalytics();