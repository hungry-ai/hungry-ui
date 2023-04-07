import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const Stats = ({ stats, isPending }) =>
  (isPending || stats != null) && (
    <>
      <h1>My stats</h1>
      {isPending ? (
        <Container style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      ) : Object.keys(stats).length === 0 ? (
        <p>No stats found.</p>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Percent match</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stats).map(([statName, statValues]) =>
              statValues.map((value, index) => (
                <tr key={index}>
                  {index === 0 && <td rowSpan={3}>{statName}</td>}
                  <td>{value.item}</td>
                  <td>{value.percentMatch}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </>
  );

export default Stats;
