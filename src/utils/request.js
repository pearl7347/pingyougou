// 负责封装请求
var request=function(url,method="get",data={},header={}){
    return new Promise((resolve,reject) =>{
       //执行逻辑
    wx.request({
     url:url,
     method:method,
     data:data,
     header:header,
     success:function(res){
         resolve(res)
     },
     fail:function(res){
         reject(res)
     }
    }) 
    })
}
export default request