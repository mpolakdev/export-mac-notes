const sqlite = require('sqlite3');
const pdf = require('phantom-html2pdf');
require('dotenv').config();

const dbPath = process.env.DB_PATH;
const exportPath = process.env.EXPORT_PATH;
const options = {
  papersize: {
    format: process.env.PAGE_FORMAT,
    orientation: process.env.PAGE_FORMAT,
    border: process.env.PAGE_BORDER
  }
}

const db = new sqlite.Database(dbPath, sqlite.OPEN_READONLY, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

const query = `SELECT * FROM ZNOTEBODY`;

db.all(query, [], async (err, rows) => {

    if (err) {
        throw err;
    }

    for (let i = 0; i < rows.length; i++) {

      options.html = rows[i].ZHTMLSTRING;

      await new Promise((resolve, reject) => {
        return pdf.convert(options, function(err, result) {
          const filename = `${rows[i].ZNOTE}.pdf`;

          return result.toFile(`${exportPath}/${filename}`, function (file) {
              console.log(`File created ${filename}`);
              resolve();
          });
        });
      });
    }

    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
});



 
