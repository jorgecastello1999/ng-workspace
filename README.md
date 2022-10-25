# NgWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run Jasmine `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

***
# Eslint config
### Instalar EsLint VSCode && Npm

`ng add @angular-eslint/schematics`
`npm install --save-dev eslint-plugin-html` 
### Será iniciado 


***
# Prettier config
### instalar Prettier VSCode && Npm

`npm i prettier eslint-config-prettier eslint-plugin-prettier -D`
## In .ts files of .eslintrc.json
```
 "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
```
## In .html files

```
"extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:prettier/recommended"
      ],
```

## Add a .prettierrc config and .prettierignore
```
{
  "arrowPares":"always",
  "bracketSpacing":true,
  "insertPragma": false,
  "printWidth": 80,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": true,
  "endOfLine": "auto"
  }
  ```
```
node_modules/*
package-lock.json
src/index.html
```

https://prettier.io/playground/




