export default function renderMatrix(matrix) {
  const field = document.createElement('div');
  field.classList.add('field');
  document.body.append(field);

  for (let i = 0; i < matrix.length; i++) {
    const row = document.createElement('div');
    row.classList.add('field-row');
    field.append(row);

    for (let j = 0; j < matrix.length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (matrix[i][j].isBomb) cell.classList.add('bomb');
      row.append(cell);

      // console.log(matrix[i][j])
    }
  }
}