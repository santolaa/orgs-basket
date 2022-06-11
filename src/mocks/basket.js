import logo from '../../assets/logo.png'
import potato from '../../assets/fruits/potato.png'
import tomato from '../../assets/fruits/tomato.png'
import pumpking from '../../assets/fruits/pumpkin.png'
import broccoli from '../../assets/fruits/broccoli.png'
import cucumber from '../../assets/fruits/cucumber.png'

const basket = {
  top: {
    title: 'Detalhes da cesta'
  },
  details: {
    basketName: 'Cesta de verduras',
    farmLogo: logo,
    farmName: 'Jenny Jack Farm',
    description: 'Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    price: 'R$ 40,00',
    button: 'Comprar'
  },
  items: {
    title: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        image: tomato
      },
      {
        name: 'Brócolis',
        image: broccoli
      },
      {
        name: 'Batata',
        image: potato
      },
      {
        name: 'Pepino',
        image: cucumber
      },
      {
        name: 'Abóbora',
        image: pumpking
      }
    ]
  }
}

export default basket
