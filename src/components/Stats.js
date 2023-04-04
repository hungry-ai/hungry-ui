import Table from "react-bootstrap/Table";

const stats = {
  "Favorite food": [
    { item: "Food 1", percentMatch: 95 },
    { item: "Food 2", percentMatch: 90 },
    { item: "Food 3", percentMatch: 85 },
  ],
  "Least favorite food": [
    { item: "Food 1", percentMatch: 5 },
    { item: "Food 2", percentMatch: 10 },
    { item: "Food 3", percentMatch: 15 },
  ],
  "Favorite cuisine": [
    { item: "Cuisine 1", percentMatch: 95 },
    { item: "Cuisine 2", percentMatch: 90 },
    { item: "Cuisine 3", percentMatch: 85 },
  ],
  "Least favorite cuisine": [
    { item: "Cuisine 1", percentMatch: 5 },
    { item: "Cuisine 2", percentMatch: 10 },
    { item: "Cuisine 3", percentMatch: 15 },
  ],
};

function ItemTable() {
  const statsTable = Object.entries(stats).map(([statName, statValues]) =>
    statValues.map((value, index) => (
      <tr>
        {index === 0 && <td rowspan={3}>{statName}</td>}
        <td>{value.item}</td>
        <td>{value.percentMatch}</td>
      </tr>
    ))
  );

  return (
    <div>
      <h1>My Stats</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Category</th>
            <th>Item</th>
            <th>Percent match</th>
          </tr>
        </thead>
        <tbody>{statsTable}</tbody>
      </Table>
    </div>
  );
}

export default ItemTable;
