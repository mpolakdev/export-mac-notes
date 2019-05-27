A tiny package for exporting all notes from the Mac Notes app into PDF files.

The Notes app uses an SQLite database to store an HTML representation of your notes. This package reads from the database and converts each of the notes into a PDF file.

### Prerequsites

[Node >=8.5](https://nodejs.org/en/download/current/)

### Installation

1. `git clone https://github.com/mpolakdev/export-mac-notes.git`

2. `npm install`

### Configuration

1. Rename `.env.example` as `.env`.

2. Configure the following settings in the `.env` file:

    `DB_PATH` - The absolute path to the SQLite database on your local machine that stores your Notes files.  
    `EXPORT_PATH` - The absolute path to the folder to export the files to (the folder must be created in advance).
    `PAGE_FORMAT` - The format of the page the PDF will be in (see options [here](https://github.com/bauhausjs/phantom-html2pdf#paper-size)).  
    `PAGE_ORIENTATION` - The format of the page the PDF will be in (see options [here](https://github.com/bauhausjs/phantom-html2pdf#paper-size)).   
    `PAGE_BORDER` - The format of the page the PDF will be in (see options [here](https://github.com/bauhausjs/phantom-html2pdf#paper-size)).    

Example:
```
DB_PATH=/Users/YOUR_USERNAME/Library/Containers/com.apple.Notes/Data/Library/Notes/NotesV7.storedata
DESTINATION='./exports'
PAGE_FORMAT=A4
PAGE_ORIENTATION=portrait
PAGE_BORDER=.5in
```

### Usage

`npm run export`