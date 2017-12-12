var cfg  = require("./knex-cfg").pg;
var screen = require("./screen");
var knex = require("knex")(cfg);

screen.clear();
knex.select("title","rating").from("books").asCallback(function(err,rows){
  if(err) { console.error(err); }
  else {
    screen.write(rows, "pretty");
  }
  // knex.destroy();
  console.log("done");
})
