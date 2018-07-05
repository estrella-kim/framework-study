import moment from 'moment';
import { PRICE , priceSum as mealPriceSum } from './modules/Meal';
import sonata from './modules/Car.js';
import {COOKIE} from './modules/Cookie'; // 같은 네임으로 해도 에러를 뿜는다.



// meal
console.log(PRICE);
console.log(mealPriceSum(100, 3000));

//let sonata  = 'Car'; let/const 던 모듈이 쓰였던 걸 다시 정의하면 트랜스파일이 안된다.

// car
sonata.excel();
sonata.excel();
console.log(sonata.speed);

// cookie
const storedName = new COOKIE();
const today = new Date().getTime();
const expireDate = new Date(today + (24 * 60 * 60 * 1000));

if(!storedName.checkCookie('name')) storedName.cookieStore('name', 'jiyoung', expireDate, '/')

// moment
console.log(moment().format());