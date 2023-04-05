import Table from "react-bootstrap/Table";

const Stats = ({ stats }) => (
  <div>
    <h1>My stats</h1>
    <Table bordered>
      <thead>
        <tr>
          <th>Category</th>
          <th>Item</th>
          <th>Percent match</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={3}>Favorite foods</td>
          <td>Food 1</td>
          <td>95%</td>
        </tr>
        <tr>
          <td>Food 2</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>Food 3</td>
          <td>85%</td>
        </tr>
        <tr>
          <td rowSpan={3}>Least favorite foods</td>
          <td>Food 1</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>Food 2</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>Food 3</td>
          <td>15%</td>
        </tr>
        <tr>
          <td rowSpan={3}>Favorite cuisines</td>
          <td>Cuisine 1</td>
          <td>95%</td>
        </tr>
        <tr>
          <td>Cuisine 2</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>Cuisine 3</td>
          <td>85%</td>
        </tr>
        <tr>
          <td rowSpan={3}>Least favorite cuisines</td>
          <td>Cuisine 1</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>Cuisine 2</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>Cuisine 3</td>
          <td>15%</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Stats;
