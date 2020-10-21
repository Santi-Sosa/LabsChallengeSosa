const server = require('express').Router();
const { Api } = require('../db.js');
const fetch = require('node-fetch');

server.get('/search', (req, res, next) => {
    const query = req.query.query;

    Api.findOne({
        where: {
          search: query,
        },
    })
    .then((data) => {
        if(data){
            res
                .status(200)
                .json(data)
                .send(data);
        }else{
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then((data) => data.json())
            .then((data) => {
                Api.create({
                    search: query,
                    data: data.results,
                })
                res.status(200).json(data.results).send(data);
            })
            .catch(next);
        }
    })
    .catch(next);
});

module.exports = server;