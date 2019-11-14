module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                {
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties'
                                    ]
                                },
                                "@babel/react"
                            ]
                        }
                    }
                ]
            }
        ]
    }
};