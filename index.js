const express = require("express");
const app = express();
require("express-ws")(app)

const prisma=require("./prismaClient")


const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { contentRouter } = require("./routers/content");
app.use("/content", contentRouter);

const { userRouter } = require("./routers/user");
app.use("/", userRouter);

const {wsRouter}=require("./routers/ws")
app.use("/",wsRouter)



app.get("/info", (req, res) => {
 res.json({ msg: "api testing" });
});

const server = app.listen(3000, () => {
 console.log("api started at 3000");
});

const gracefulShutdown = async () => {
 await prisma.$disconnect();
 server.close(() => {
  console.log("api closed");
  process.exit(0);
 });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
