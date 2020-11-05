const express = require("express");
const router = express.Router();
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  router.use(express.static("client/build"));
}
// Add routes, both API and view
router.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

module.exports = router;