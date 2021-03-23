import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Incoming" />
        </header>
        <strong>$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outgoing</p>
          <img src={outcomeImg} alt="Outgoing" />
        </header>
        <strong>-$1000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>$1000,00</strong>
      </div>
    </Container>
  )
}
