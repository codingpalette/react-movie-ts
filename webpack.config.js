const path = require('path');
const webpack = require('webpack');


module.exports = (env, options) => {
    const config = {
        resolve: {
            extensions: ['.jsx', '.js', '.tsx', '.ts'],
        },
        entry: {
            app: './client'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
                {
                    test: /\.()$/,  // font등의 파일 확장자 regExp
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './dist'
                        }
                    }
                },
                {
                    test: /\.()$/,  // 이미지 확장자 regExp
                    exclude: /node_modules/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?[hash]',  // 파일명 또는 파일해쉬값
                            publicPath: './dist/',  // 빌드 후 limit가 넘는 파일 위치
                            limit: 10000  // 10000byte 제한
                        }
                    }
                },
            ]
        },
        plugins: [

        ],
        output: {
            filename: "app.js",
            path: path.join(__dirname, 'dist'),
            publicPath: '/dist',
        }
    }
    // 배포
    if (options.mode === 'production') {
        config.mode = 'production';
        config.devtool = 'hidden-source-map';

        // 개발
    } else {
        config.mode = 'development';
        config.devtool = 'eval'; // hidden-source-map
    }

    return config;

}
