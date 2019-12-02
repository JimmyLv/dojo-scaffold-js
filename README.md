[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JimmyLv/dojo-scaffold-js) <a href="https://codesandbox.io/s/github/JimmyLv/dojo-scaffold-js" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary open-codesanbox-chrome-extension">
  
  <svg x="0px" y="0px" width="18px" height="18px" viewBox="0 0 1024 1024"><g id="Layer_1"><polyline fill="#FFFFFF" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline fill="#FFFFFF" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline fill="#FFFFFF" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg>

  Open in CodeSandbox
</a>


# 练功房脚手架

如果你恰好也用 JavaScript 做练功房的练习，可以从这个脚手架开始入手。

准备步骤：

* `git clone https://github.com/jimmylv/dojo-scaffold-js.git`
* `cd dojo-scaffold-js`
* `yarn install`

用 Intellij IDEA 或 WebStorm 或者你习惯的任何 IDE（但是我强烈建议不要使用 IDEA 或 WebStorm 之外的其他 IDE）导入工程，运行全部测试，你应该看到绿条。

```bash
$ yarn start #查看题目
$ yarn test #运行测试

------

 PASS  src/App.test.js
 PASS  src/dojo/fizzBuzz.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.681s
Ran all test suites.

Watch Usage: Press w to show more.
```

从这里开始你的 Dojo 练习。

------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
