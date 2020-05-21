module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@import/assets/styles/styles.scss";'
            }
        }
    }
};