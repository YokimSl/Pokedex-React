import { GlobalStyle } from '../../Styles/global';
import { Wrapper,
    Menu,
    Container,
    Content,
} from './styles'


import ImgPikachu from '../../assets/pikachu.png'
import headerPikachu from '../../assets/cabeca-pikachu.png'
export function CartPokemon() {
  return (
    <Wrapper>
        <Container>
            <header>
                <div>
                    <h2>Pikachu</h2>
                    <span>#025</span>
                </div>
                <span className='fundo'>Eletrico</span>
                <div>
                    <img src={ImgPikachu} alt="imagem pikachu" />
                </div>
            </header>
            <Content>
            <div>
                <h3>Status</h3>
                <ul>
                    <li>HP: 180</li>
                    <li>Ataque: 103</li>
                    <li>Defesa: 76</li>
                    <li>Velocidade: 106</li>
                    <li>Total: 465</li>

                </ul>
            </div>
            <div>
                <h3>Habilidades</h3>
                <ul>
                    <li>Cabeçada</li>
                    <li>Raio</li>
                </ul>
            </div>
            </Content>
            </Container>
        <Menu>
            <nav>
                <ul>
                    <li>
                        <img src={headerPikachu} alt="cabeça pikachu" />
                    </li>
                    <span>Pikachu</span>
                </ul>
            </nav>
        </Menu>
    <GlobalStyle />
    </Wrapper>
  );
}
