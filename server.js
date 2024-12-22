import express from 'express';
import { pgPool } from './pg_connection.js';

var app = express();


app.listen(3001, () => {
    console.log('I think the server might be running now');
});

//Endpoint is defined here

app.get('/', (req, res) => {
    res.send('This is the root endpoint');
})

app.get('/movies', async (req, res) => {

    try {
        const result= await pgPool.query('SELECT * FROM movie');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});

    }

    res.send('Getting user information');
})

app.get('/favorite_movies', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM favorite_movie');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/movie_api', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie_api');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/movie_genres', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie_genre');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/movie_reviews', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie_review');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});