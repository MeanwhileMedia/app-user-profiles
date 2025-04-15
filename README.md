# app-user-profiles
An app for showing user data from an external API


## Usage

#### 1. Install system dependencies
Install the newest stable version of Node. NVM is the suggested tool which provides instructions [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro).

#### 2. Install app dependencies
```
npm install
```

#### 3. Add Elevate user API Key by creating a `.env.local` file in the project root and add the following line:
```
USER_API_ID={yourPrivateID}
USER_API_KEY={yourPrivateKey}
```

#### 4. Run in local browser
```
npm run dev
```

#### 5. Visit any of the three available routes: 
- http://localhost:3000/users
- http://localhost:3000/users/0 (Where "0" is a user id)
- http://localhost:3000/users/carousel


## Tests

Before running tests you must have the next dev server running:
```
npm run dev
```

To execute automated tests run the following command. This will run both unit tests (Mocha) and end-to-end tests (Cypress):
```
npm run test:all
```

Alternatively, to open the interactive Cypress dashboard, execute the following. This is a helpful tool to write and debug new e2e tests.
```
npm run cypress:open
```
