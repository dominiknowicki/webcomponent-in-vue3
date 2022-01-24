module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                if (!options.compilerOptions) options.compilerOptions = {}
                options.compilerOptions.isCustomElement = tag => (tag.startsWith('wc-') || ['wc-webcomponent'].includes(tag))
                console.log('***options.compilerOptions', options.compilerOptions)
                return options;
            })
    }
}
