var exec = require("child_process").exec;

exec("ls", function(err, stdout) {
  if (err) {
    throw err;
  }

  console.log("Listing Finished");

  console.log(stdout);
});
