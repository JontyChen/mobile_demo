const {override,addPostcssPlugins }  = require('customize-cra')
// module.exports = function override(config, env) { 
//     // do stuff with the webpack config... 
//     return config; 


// };

module.exports = override(
    addPostcssPlugins([require("postcss-px-to-viewport")({ 
        unitToConvert: 'px',
        viewportWidth: 750,
        unitPrecision: 3,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [/node_modules/],
    })])
)