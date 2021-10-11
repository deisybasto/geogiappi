require('dotenv').config();
const express = require('express');
const route  = require('../../routes/routes')
const port = process.env.PORT || 8000


module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = port;
        this.ownRoute = route;
        this.router = express.Router();

        this.routes();

    }

    middlewares() {
        this.app.use(express.static('public'));

    };

    routes() {

        //ruta de la api
        //this.expressRoutes = this.app.router;
       //this.router.use('/v1', this.ownRoute);
        this.app.get('/api', (req, res) => {
            res.json({
                msg: "ok",
                res: "api",

            });

        });

        
    };


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${port}
                 ${this.routes()}`)

        });

    }
}
