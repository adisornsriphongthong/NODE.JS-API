import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();

app.use(cors());

const apiKey = 'e68519d6512679e195544877f7d3ee1c';
const cityName = 'Suphan%20Buri';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Suphan%20Buri&appid=e68519d6512679e195544877f7d3ee1c`;

app.get('/weather', async (req, res) => {
    try {
      const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Suphan%20Buri&appid=e68519d6512679e195544877f7d3ee1c');
      const currentData = response.data;

      res.json(currentData);

      console.log(currentData);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//params req.params.value
app.get('/api2/:value', (req, res) => {
    const value = req.params.value
    res.send(value)
})

http://localhost:3000/api3?value=hello%20girl&value2=hello%20world
//query req.query.value
app.get('/api3', (req, res) => {
    const value = req.query.value;
    const value2 = req.query.value2
    res.send(value + ' ' + value2)
})

//fetch API
app.get('/api1', async (req, res) => {
    try {
      const response = await axios.get('https://api.kanye.rest/');
      const currentData = response.data;

      res.json(currentData);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port );
})