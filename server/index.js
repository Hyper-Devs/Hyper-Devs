const app = require('./app')
const express = require('express')

if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))

  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  })
}


const port = process.env.PORT || 8800

app.listen(port, () => {
  console.log(`Connected to backend using port ${port}.`);
});

module.exports=app;