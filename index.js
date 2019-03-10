var express = require('express');
const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

//const pool = new Pool({ connectionString: connectionString });
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('home');
});
app.get('/getPerson', function (request, response) {
    response.render('home');
    //getPerson(request, response);
});

        
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/*function getPerson(request, response) {
    // First get the person's id
    var id = request.query.id;

    // TODO: We should really check here for a valid id before continuing on...

    // use a helper function to query the DB, and provide a callback for when it's done
    getPersonFromDb(id, function (error, result) {
        // This is the callback function that will be called when the DB is done.
        // The job here is just to send it back.

        // Make sure we got a row with the person, then prepare JSON to send back
        if (error || result == null || result.length != 1) {
            response.status(500).json({ success: false, data: error });
        } else {
            var person = result[0];
            response.status(200).json(result[0]);
        }
    });
}

// This function gets a person from the DB.
// By separating this out from the handler above, we can keep our model
// logic (this function) separate from our controller logic (the getPerson function)
function getPersonFromDb(id, callback) {
    console.log("Getting person from DB with id: " + id);

    // Set up the SQL that we will use for our query. Note that we can make
    // use of parameter placeholders just like with PHP's PDO.
    var sql = "SELECT id, first, last, birthdate FROM person WHERE id = $1::int";

    // We now set up an array of all the parameters we will pass to fill the
    // placeholder spots we left in the query.
    var params = [id];

    // This runs the query, and then calls the provided anonymous callback function
    // with the results.
    pool.query(sql, params, function (err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            callback(err, null);
        }

        // Log this to the console for debugging purposes.
        console.log("Found result: " + JSON.stringify(result.rows));


        // When someone else called this function, they supplied the function
        // they wanted called when we were all done. Call that function now
        // and pass it the results.

        // (The first parameter is the error variable, so we will pass null.)
        callback(null, result.rows);
    });

} // end of getPersonFromDb*/