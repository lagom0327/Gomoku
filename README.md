# Gomoku

## [Demo](https://lagom0327.github.io/Gomoku/)
## Introduction
使用 `create-react-app` 建立五子棋小遊戲
使用 BEM 命名規則撰寫 SCSS ，使用變數管理畫面顏色
## Screenshot
![Alt gomoku](./screenshot.png)


## File Structure
```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Board.js
│   │   ├── Controlsize.js
│   │   ├── GameSteps.js
│   │   └── Square.js
│   ├── scss
│   │   ├── Board.scss
│   │   ├── Controlsize.css
│   │   ├── GameSteps.scss
│   │   ├── index.scss
│   │   └── param.scss
│   ├── index.js
│   ├── reset.css
│   ├── serviceWorker.js
│   └── setupTests.js
├── .eslintrcignore
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── screenshot.png
```
## User story
- 可以選擇或自訂棋盤尺寸
  - 最小 `5 X 5`
  - 最大 `19 X 24`
- 可以跳回以往任何一步

## Getting Started
cloning the repository
```console
git clone https://github.com/lagom0327/Gomoku.git
```
Installing all dependencies for the project:
```console
npm install
```
Starting a server instance, listening on port 8080:
```console
npm run start
```

## Deploying to GitHub Pages
Add remote repository
```console
git remote add origin https://github.com/user/userRepo.git
```
Build & Deploy the application
```console
npm run deploy
```

## Built With
- [React](https://reactjs.org/) 
- [SASS](https://sass-lang.com/)
- [ESLint](https://eslint.org/) : Lint Code
- [GitHub Pages](https://pages.github.com/) : Deploy