import express from 'express';
import cors from 'cors';
import camelCase from 'camelcase';
import xlsx from 'xlsx';

const ITEMS_PER_PAGE = 3;

const app = express();

app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use('/', (req, res) => {
  const { page, q } = req.query;
  const workbook = xlsx.readFile('data/FAQ-Entrada das quesões.xlsx');
  const sheet_name_list = workbook.SheetNames;
  const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  const data = xlData.reduce((acc, row) => {
    const rowData = Object.keys(row).reduce(
      (_acc, _row) => ({
        ..._acc,
        [camelCase(_row)]: row[_row],
      }),
      {},
    );

    if (!rowData.reposta || !rowData.questão) return acc;
    if (q) {
      const lowercaseQuestion = rowData.questão.toLowerCase();
      const lowercaseAnswer = rowData.reposta.toLowerCase();
      const query = q.toLowerCase();

      if (
        !lowercaseQuestion.includes(query) &&
        !lowercaseAnswer.includes(query)
      ) {
        return acc;
      }
    }
    return [...acc, rowData];
  }, []);

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  res.send({
    items: data.slice(start, end),
    pages: Math.ceil(data.length / ITEMS_PER_PAGE),
  });
});

app.listen(3001, () => console.log('Listening...'));
