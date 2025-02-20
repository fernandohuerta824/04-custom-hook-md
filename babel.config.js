// Babel react configuration

export default {
    presets: [
        '@babel/preset-react',
        '@babel/preset-env',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        ['module-resolver', {
            root: ['./src'],
            alias: {
                'styles': './src/assets/styles',
                'components': './components',
            },
        }],
    ],
};

