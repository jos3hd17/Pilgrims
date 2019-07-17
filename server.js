import express, { static } from 'express';
import { join } from 'path';

const app = express();

app.use(static(__dirname + 'dist/angular-deploy'));

app.get('*' , function(req, res) {
    res.sendFile(join(__dirname + 'dist/angular-deploy/index.html'));
});

app.listen(process.env.PORT || 8080);