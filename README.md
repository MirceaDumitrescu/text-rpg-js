#  text-rpg-js

Project for students from New Tech Academy.

A small game ( exploratory text rpg ) on frontend working with a MongoDB Atlas DB running on NodeJs and written with Typescript.

Node version:

> "node": ">=12"

#  how to install

Run comamnd:

    npm install


Create file **tsconfig.js** with the following content



    {

    "extends": "@tsconfig/node16/tsconfig.json",

    "compilerOptions": {},

    "include": ["src"],

    "exclude": ["node_modules"]

    }

# how to run the backend server

Run the command: ( while in /src folder )

    npx nodemon main.ts
