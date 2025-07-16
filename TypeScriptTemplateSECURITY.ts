export const eviroment = {
production:false,
host :'http//:12.1.0:5500/java/python' ,
api_EndPoint: '',
api_EndPoint_Login: '',
assets_path: 'assets/images',
END:'dev'
}

eviroment.api_EndPoint = eviroment.host + '/web';
eviroment.api_EndPoint_Login = eviroment.host + 'login/user login';