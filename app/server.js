const app = require("./app");

const port = process.env.PORT || 5000;

// start the Express server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
