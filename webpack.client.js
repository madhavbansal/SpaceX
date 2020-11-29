const path= require('path');
module.exports={
target:'node',
entry:'./src/client.js',
output:{

    filename:'client_bundle.js',
    path:path.resolve(__dirname,'build/public'),
    publicPath:'/build/public'

},
module:{

    rules:[

        {

            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            options:{
                presets:[
                    '@babel/react',
                    ['@babel/env',{
                            targets:{browsers:['last 2 versions']}
                        }]
                ]
            }
        }
    ]
},


}