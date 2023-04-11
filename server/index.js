
import {conectDb} from './db.js'
import {PORT} from './config.js';
import app from './app.js';

conectDb();

app.use("/", (req, res) => {
  res.send('Bienvenido al servidor de home page');
});
app.listen(PORT);


 