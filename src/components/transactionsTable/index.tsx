import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Web site </td>
            <td className="deposit">R$12.000 </td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel </td>
            <td className="withdraw"> - R$1.000 </td>
            <td>casa</td>
            <td>17/02/2021</td>
          </tr>


        </tbody>
      </table>
    </Container>
  )
}