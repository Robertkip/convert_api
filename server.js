require('dotenv').config();
var axios = require('axios');
var data = {"api_key": `${process.env.API_KEY}`,    "email": `${process.env.EMAIL}`};
//console.log(data);
const data_require = JSON.stringify(data);
//console.log(data_require);


var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: process.env.URL_APP,
  headers: { 
    'Content-Type': 'application/json , charset=utf-8',
    'Cookie': process.env.COOKIE_APP
  },
  data : data_require
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  const myArr = (response.data);
  console.log(myArr.subscription.id);
  console.log(myArr.subscription.state);
  console.log(myArr.subscription.created_at);
  console.log(myArr.subscription.source);
  console.log(myArr.subscription.referrer);
  console.log(myArr.subscription.subscribable_type);
  console.log(myArr.subscription.subscriber.id);
})
.catch(function (error) {
  console.log(error);
});
