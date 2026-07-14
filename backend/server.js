import app from "./app.js";
import { db } from "./config/db.js";
import cors from 'cors';

//  db:
db();

app.use(cors());

//  localhost:

app.listen(process.env.PORT, () => {
  console.log(`localhost running at port ${process.env.PORT}`);
});
