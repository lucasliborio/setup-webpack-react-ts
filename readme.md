### Estrutura do setup

1. Setup a basic react app with TS and Webpack 5
2. Configure webpack ant typescript to allow rendering og images and svg's
3. Setup webpack config for multiple enviroments like dev and prod
4. Add react refresh
5. Linting with ESLint
6. Code Formatting with Prettier
7. Husky

### Tips

- Entender melhor o que são module-source-map

### Setup webpack

1. Git init and npm init
2. Install react and react-dom
3. Install typescript @types/react @types/react-dom como dev-dependency
4. Install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript como dev-dependency
5. Install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader css-loader style-loader
6. Crie o arquivo tsconfig.json com os valores corretos para o projeto React
7. Crie o arquivo .babelrc adicionado os presets instalados
8. Crie o arquivo webpack.config.js para o seu ambiente desejado.

### Config padrão .babelrc

1. Adicionar em um array com os presets instalados.

```javascript
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
```

### Fazendo o Ts and React funcionar no webpack- Loader

1. Dentro do webpack.common.js adicione o objeto dentro do array "rules"

```javascript
{
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
},
```

### React router dom on webpack

1. Quando tentamos acessar uma rota que não seja a root durante o desenvolvimento, o browser nos devolve um cannot get /'name-route'. Para resolver esse problema, adicionaremos dentro da propriedade devServer

```javascript
devServer: {
  historyApiFallback: true,
}
```

### Fazendo CSS Funcionar no webpack- Loader

1. Dentro do webpack.common.js adicione dentro do array rules:

```javascript
{
  test:/\.css/,
  use:[
    'style-loader',
    'css-loader'
  ]
}
```

### Fazendo Assets funcionar no webpack

1. Dentro do webpack.config.js adicione dentro do array rules:

```javascript
{
    test: /\.(svg|png|jpg|gif|)$/i,
    type: 'asset/resource'
}
```

2. Quando estamos em ambiente de produção, queremos que os assets fiquem dentro da pasta build, para isso adicionamos a opção dentro da propriedade output

```javascript
{
  assetModuleFilename: 'assets/img/[name].[hash].[ext]'; //path created on build folder
}
```

### Separando os arquivos para ambientes diferentes DEV & PROD

1. Configurações basica que servem para ambos ambientes ficam no arquivo webpack.common.js
2. Pequenas configurações ficam no no ambiente dev e prod
3. É criado um arquivo que mergeia as configs dentro de uma só
4. Adicionamos --env nos scripts de "start" e "build" com os valores "dev" ou "prod" para definir qual arquivo será utilizado.
5. Qualquer duvida, olhar o arquivo webpack.config.js

```json
{
  "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",
  "build": "webpack --config webpack/webpack.config.js --env env=prod "
}
```

## Plugins

### React Refresh webpack

##### Guarda os estados mesmo após refresh da pagina.

1. Install como dev-dependency @pmmmwh/react-refresh-webpack-plugin react-refresh
2. Adicione no webpack.config.dev a config devServer

```javascript
devServer: {
  hot: true;
}
```

3. Após isso adicione o plugin react-refresh-webpack-plugin no array de "plugins"

```javascript
plugins: [new ReactRefreshPlugin()];
```

### Html webpack plugin

1. Install como dev-dependency html-webpack-plugin
2. Adicione no webpack.config.commom, no array de plugins
3. É necessario passar um objeto como parametro que possua a propriedade "template" com o local do arquivo .html que será usado como base.

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', 'src/index.html'),
  }),
];
```

### ESLint

1. Install eslint como dev-dependency
2. Para integrarmos o eslint com o react, instalamos:

- eslint-plugin-react eslint-plugin-react-hooks

3. Para integrarmos o eslint com typescript, instalamos:

- @typescript-eslint/parser @typescript-eslint/eslint-plugin

4. Crie o arquivo de configuração .eslintrc.js adicionando corretamente os plugins instalados para react e typescript

- **Obs: Crie o arquivo .eslintignore para adicionar exceessões no momento do lint**

### Prettier

1. Instale os pacotes como dev-dependency prettier eslint-config-prettier eslint-plugin-prettier para evitar conflitos do prettier com o eslint e para adicionar o prettier dentro o eslint respectivamente.
2. Crie o arquivo de configuração .prettierrc.js e adicione o objeto com as regras de code formatter

##### Diferença entre o Eslint e Prettier

- Eslint é um code styles, que define padrões de estilo para o codigo
- Prettier é um code formatter que define regras para a formatação do codigo, como por exemplo aspas, espaços, ponto e virgula

### Instalando o lint-staged e o Husky

- Install lint-staged@4 husky
- Crie o arquivo .lintstaged.json contendo o glob com as extensões dos arquivos que o lint-staged executará e o script a ser executado. Normalmente é um comando de lint ou de testes.
- Rode o comando npx husky-init para instalar automaticamente o husky com o hook.
- Dentro da pasta .husky terá um arquivo para algum determinado git hook, normalmente é o "pre-commit", nele adicione o script que será rodado, normalmente é o comando que chamada o lint-staged. Sendo assim, antes de todo commit o husky irá chamar o lint-staged e o lint staged vai buscar em todos arquivos do staged-area do git que preenchem a regra escolhida dentro do arquivo .lintstagedrc.json e rodará o comando descrito no proprio arquivo.
