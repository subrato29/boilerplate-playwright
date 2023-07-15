# boilerplate-playwright

## Author

```
Subrato Sarkar

```

## Getting started

```
Make sure node is installed.

npm init playwright@latest

git clone 'repo-url'

cd boilerplate-playwright

npm install

```

## [Fixed] NPM err code UNABLE_TO_GET_ISSUER_CERT_LOCALLY

```
npm config set strict-ssl false

npm config set registry http://registry.npmjs.org/

export NODE_EXTRA_CA_CERTS=path/to/my-certs.pem

export NODE_EXTRA_CA_CERTS=path/to/my-certs.pem


```

## Language used

```
JavaScript

```

## Framework

```
pageobject

waitUtils

Read test data from external JSON

```

## How to run the test for web app

```
Mention `testDir: './tests/web',` inside `defineConfig` in `playwright.config.js` file
And then run below command
npm run web

```

## How to run the test for api

```
Mention `testDir: './tests/api',` inside `defineConfig` in `playwright.config.js` file
And then run below command
npm run api

```

## playwright.config.js

```
fullyParallel: false (If it's true, then tests will runn in parallel even multiple tests even in same files)

testMatch: 'ebayHome.spec.js' (Under `projects` section, if you want to run a specific test file, you can explicitly mention the name of the file)

```
