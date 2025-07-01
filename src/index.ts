import express from "express";

import conversionsRouter from "./controllers/conversion";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", conversionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
