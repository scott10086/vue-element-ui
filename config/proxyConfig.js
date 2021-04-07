const proEnv=require('./prod.env');
const devEnv=require('./dev.env');

const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
  target = proEnv.API_HOST;
}else{  // 本地环境
  target = devEnv.API_HOST;
}

module.exports = {
  proxy: {
    '/api': {
      target: target,  // 接口域名
      changeOrigin: true,//是否跨域
      pathRewrite: {
        '/api': '/'
      }
    },
  }
}
