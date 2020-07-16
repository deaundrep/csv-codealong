const fs = require('fs');

const file = fs.readFileSync('/example.csv', 'utf-8')
const rows = file.split('\n')
for (let row of rows){
    const cells = row.split(',');
    console.log(cells[4])
}