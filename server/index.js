
import {conectDb} from './db.js'
import {PORT} from './config.js';
import app from './app.js';

conectDb();
app.listen(PORT);
 