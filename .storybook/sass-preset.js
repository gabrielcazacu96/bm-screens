const path = require("path");

module.exports = {
    webpackFinal: async (baseConfig, options) => {
        const { module = {} } = baseConfig;

        const newConfig = {
            ...baseConfig,
            module: {
                ...module,
                rules: [...(module.rules || [])],
            },
        };

        newConfig.resolve.modules.push(path.resolve(__dirname, '../'));

        newConfig.module.rules.push({
            test: /\.module\.s(a|c)ss$/,
            loader: [
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: `
                              @import './src/styles/_variables.scss';
                        `,
                    },
                },
            ],
        });

        return newConfig;
    },
};
