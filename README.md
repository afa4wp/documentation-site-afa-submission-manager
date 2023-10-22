# documentation-site-for-wp-all-forms-api

Explore the comprehensive documentation for our robust WordPress plugin, dedicated to revolutionizing form management. Discover how we've simplified form entry management, offering you the essential tools to optimize your workflow and reclaim valuable time. Delve into our documentation to harness the full potential of this powerful solution for your WordPress forms.

Streamline your form management with ease and discover how to provide support for various form builder plugins. Get ready to optimize your WordPress forms and save valuable time.

# Build Setup

```
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

```

For all users working with Node.js versions higher than 16, it's important to update the `package.json` file with the following script modification for the `build` process: `"build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build src"`. This adjustment ensures the proper execution of `yarn build` and is applicable to everyone using these newer Node.js versions.

For users with Node.js versions lower than 16, simply use ` "build": "vuepress build src"` in your `package.json` to execute `yarn build` as usual.
