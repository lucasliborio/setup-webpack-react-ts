### Estrutura do setup

1. Setup a basic react app with TS and Webpack 5
2. Configure webpack ant typescript to allow rendering og images and svg's
3. Setup webpack config for multiple enviroments like dev and prod
4. Add react refresh
5. Linting with ESLint
6. Code Formatting with Prettier
7. Husky

### Tips
* Entender melhor o que são module-source-map

### Setup webpack

1. Git init and npm init
2. Install react and react-dom
3. Install typescript @types/react @types/react-dom with dev dependency
4. Install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript with dev dependency
5. Install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader css-loader style-loader
6. Crie o arquivo tsconfig.json com os valores corretos para o projeto React
7. Crie o arquivo .babelrc adicionado os presets instalados
8. Crie o arquivo webpack.config.js para o seus ambiente desejado.

### Config padrão .babelrc
1. Adicionar em um array os presets instalados.
~~~javascript
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}
~~~

### Fazendo o Ts and Tsx funcionar
1. Dentro do webpack.config.js adicione o objeto dentro do array "rules"
~~~javascript
{
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
},
~~~

### Fazendo CSS Funcionar
1. Dentro do webpack.config.js adicione dentro do array rules:
~~~javascript
{
  test:/\.css/,
  use:[
    'style-loader',
    'css-loader'
  ]
}
~~~
### Fazendo Assets funcionar
1. Dentro do webpack.config.js adicione dentro do array rules:
~~~javascript
{
    test: /\.(svg|png|jpg|gif|)$/i,
    type: 'asset/resource'
}
~~~

### Separando os arquivos para ambientes diferentes DEV & PROD
1. Confirações basica que servem para ambos ambientes ficam no arquivo webpack.common.js
2. pequena configurções ficam no no ambiente dev e prod
3. É criado um arquivo que mergeia as configs dentro de uma só
4. Adicionamos --env nos scripts de "start" e "build"
~~~json
{
  "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",
  "build": "webpack --config webpack/webpack.config.js --env env=prod "
}
~~~