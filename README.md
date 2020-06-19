<h1 align="center"><img src="icon.png" width="20px"> Take a Note</h1>
<h4 align="center">A minimalistic notes app created using MERN stack</h4>
<p align="center">
<a href = "#about">About</a>  •
<a href = "#chrome extension">Chrome-extension</a>  •
<a href = "#installation and setup">Installation</a>  •
<a href = "#database">Database</a>  •
<a href = "#deployment">Deployment</a>  •
<a href = "#author">Author</a>  •
<a href = "#license">License</a>  
</p>
<br>

Checkout the demo below:

  ![](demo1.gif)

<br>

## About
A full stack MERN app made for creating, storing and deleting notes like any Notes-App. Built an extensive backend API with Node.js & Express and integrated the React frontend to work with the API in the backend. 

#### Technologies Used
* React
* Node.js
* Express.js
* MongoDB
* Heroku

<br>

## Chrome extension
A chrome extension for the same app is built in the **[chrome-extension](https://github.com/SakshiLajurkar/Take-a-Note/tree/chrome-extension)** branch. To enable the extension on your device follow the steps given **[here](https://github.com/SakshiLajurkar/Take-a-Note/blob/chrome-extension/README.md)**. 

Checkout the demo below:

  ![](extension.gif)

<br>

## Installation and Setup

* Download the code for the app **[here](https://github.com/SakshiLajurkar/Google-Keep-2.0/archive/master.zip)**.
* Install dependencies and run the app on local server.
```bash
# Install dependencies for server
npm install
```

```bash
# Install dependencies for client
npm run client-install
```

```bash
# Run the client & server with concurrrently 
npm run dev
```
* The App will be running on `localhost:8000` and the client site at `localhost:3000`

<br>

## Database
MongoDB is currently at `localhost:27017`. To connect a MongoDB-Atlas cluster with the app for database, follow the steps given at this **[page](https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369)**. After obtaining the connection string, replace the 'url' as given below:

```bash
cd api/config/db-url
```

```bash
# insert your username and password to get access to the database
url: mongodb+srv://username:password@cluster0-yo0nm.mongodb.net/NoteDB
```

<br>

## Deployment
The app is made deployment-ready for Heroku by adding some specific elements.
* Database connected to MongoDB-Atlas cluster
* Create`Procfile` to declare process types
* Built static assets for the client site by adding 'heroku-postbuild' to scripts in `package.json`

```bash
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install -prefix client && npm run build -prefix client"
```

<br>

## Author

* **Sakshi Lajurkar** - *Initial work* - [SakshiLajurkar](https://github.com/SakshiLajurkar)

<br>

## License

The MIT Licence ([MIT](https://github.com/SakshiLajurkar))

Copyright (c) 2020 Sakshi Lajurkar

