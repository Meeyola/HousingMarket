const rewireCssModules = require("react-app-rewire-css-modules");
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = (config, env) => {
    let appCode = process.env.APP_CODE;


    config = rewireCssModules(config, env);
    config.output.filename = `app/${appCode}/webpack/bundle.js`;
    config.output.hotUpdateChunkFilename = `app/${appCode}/webpack/bundle.hot-update.js`;
    config.output.chunkFilename = `app/${appCode}/webpack/bundle.chunk-[id].js`;

    const rootImportConfig = [
        "root-import",
        {
            rootPathPrefix: "~",
            rootPathSuffix: "src"
        }
    ];

    injectBabelPlugin(rootImportConfig, config);

    config.devServer = {
        proxy: `${process.env.GATEWAY_URL}`
    };

    // config.plugins = [new MonacoWebpackPlugin()];

    return config;
};
