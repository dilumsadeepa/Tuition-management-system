# node-cors
Hello there! I'm middleware, the CORS for express.
you can setting white list to allow cross-domain.

# Installation
```
$ npm install node-cors
```
or

```
$ yarn add node-cors
```

# Usage

```
var express = require('express');
var cors = require('node-cors');
var app = express();
//you can add any domain that you allow cross-domain in the array
var whiteList = ['www.example.com', 'www.example.cn'];
app.use(cors(whiteList));

//...

app.listen(3000);
```
