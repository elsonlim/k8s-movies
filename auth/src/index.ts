import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
