import Table from "react-bootstrap/Table";

const stats = [
[{category: 'Favorite Foods', id: 1, food: 'Food 1', percentMatch: 95}, 
{id: 2, food: 'Food 2', percentMatch: 90},
{id: 3, food: 'Food 3', percentMatch: 85},
],
[{category: 'Least Favortie Foods', id: 1, food: 'Food 1', percentMatch: 5}, 
{id: 2, food: 'Food 2', percentMatch: 10},
{id: 3, food: 'Food 3', percentMatch: 15},
],
[{category: 'Favorite Cuisines', id: 1, food: 'Food 1', percentMatch: 95}, 
{id: 2, food: 'Food 2', percentMatch: 90},
{id: 3, food: 'Food 3', percentMatch: 85},
],
[{category: 'Least Favorite Cuisines', id: 1, food: 'Food 1', percentMatch: 5}, 
{id: 2, food: 'Food 2', percentMatch: 10},
{id: 3, food: 'Food 3', percentMatch: 15}
]
]

function itemMap(x){
  if (typeof x.category === 'undefined'){
    return (
      <tr key={x.id}>
        <td>{x.food}</td>
        <td>{x.percentMatch}</td>
      </tr>
    );
  }
  else {
    return (
      <tr key={x.id}>
        <td rowspan={3}>{x.category}</td>
        <td>{x.food}</td>
        <td>{x.percentMatch}</td>
      </tr>
    );
  }
};

export default function itemTable() {
const statsTable1 = stats[0].map(itemMap)
const statsTable2 = stats[1].map(itemMap)
const statsTable3 = stats[2].map(itemMap)
const statsTable4 = stats[3].map(itemMap)

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
      <tbody>
        {statsTable1}
        {statsTable2}
        {statsTable3}
        {statsTable4}
      </tbody>
    </Table>
  </div>
);
};
