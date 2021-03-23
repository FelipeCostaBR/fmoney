import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="f money" />
            <button type="button">
                new transaction
            </button>
            </Content>
        </Container>
    )
}