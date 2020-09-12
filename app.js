const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// 开启静态服务

app.use('/static',express.static(path.join(__dirname,'static')));

app.get('/login',(req,res) => {
  let name = req.query.name;
  //读取json数据
  fs.readFile(path.join(__dirname,'static','json','data.json'),'utf-8',(err,read) => {
    if(err){
      console.log(err);
    }else{
      //将json格式的字符串转化成js对象
      let img_mes = JSON.parse(read);
      // 通过循环来获取相应的数据信息
      img_mes.forEach(val => {
        if(val[name]){
          // console.log(val[val[name]]);  //返回的是一个数组
          res.send(val[val[name]]); 
        }
      })
    }
  });
})


app.listen(88,() => {
  console.log('服务已启动,启动端口88');
})