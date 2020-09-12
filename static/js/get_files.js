// 发送get请求
function getImageMessage(url,params){

  // jquery-ajax

  // $.ajax({
  //   url:url,
  //   data:params,
  //   success(data){
  //     $('.img_name').text(data[0]);
  //     $('.show_img_area').attr('src',data[1]);
  //   }
  // })

  // axios
  
  let url_params = url + '?' + params;
  axios.get(url_params)
    .then(response => {
      $('.img_name').text(response.data[0]);
      $('.show_img_area').attr('src',response.data[1]);
    })
    .catch(error => console.log(error));
}
