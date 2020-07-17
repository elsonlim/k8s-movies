import express from "express";
import userRouter from "./routes/user.route";
import { errorHandler } from "./errors/errorHandler";
import { InvalidRouteError } from "./errors/CustomErrors";

const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.all("*", async () => {
  throw new InvalidRouteError("no user");
});

app.use(errorHandler);

export default app;
