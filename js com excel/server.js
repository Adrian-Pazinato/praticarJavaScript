const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("teste");

const data = [
    {
        "name": "Teste01",
        "email": "teste01@gmail.com",
        "cellphone": "55999999999",
    },
    {
        "name": "Teste02",
        "email": "teste02@hotmail.com",
        "cellphone": "55999999999",
    }
];

const headingColumnNames = [
    "Nome",
    "Email",
    "Celular",
]

let headingColumnIndex = 1; //diz que começará na primeira linha
headingColumnNames.forEach(heading => {
    ws.cell(1, headingColumnIndex++).string(heading);
});

let rowIndex = 2; //começa na linha 2
data.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName => {
        ws.cell(rowIndex, columnIndex++)
            .string(record[columnName])
    });
    rowIndex++; //incrementa o contador para ir para a próxima linha
});

wb.write('ArquivoDoDidica.xlsx');