const app = require('./app')


app.listen(8800, () => {
  console.log("Connected to backend using port 8800.");
});

module.exports=app;