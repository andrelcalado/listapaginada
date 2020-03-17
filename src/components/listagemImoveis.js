import React, { Component } from 'react';
import CardImovel from './commons/cardImovel';
import axios from 'axios';
import Spinner from './commons/spinner';

class ListagemImoveis extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    dadosImoveis: null,
    favoritados: [],
    loading: true
  }

  async componentDidMount() {
    // Recuperação dos dados da API da Órulo
    const url = "http://localhost:3020/orulo/";
    await axios.get(url)
      .then(res => {
        this.setState({ dadosImoveis: res.data.buildings, loading: false });
      });
  }

  render() {
    if (this.state.loading) { // Verificando se a requisição está sendo executada
      return <Spinner/>
    }

    else { // Com a requisição concluída, a página carrega
      const listImoveis = this.state.dadosImoveis.map(imovel => {
        return (
          <div>
            <CardImovel
                id={imovel.id} name={imovel.name} max_area={imovel.max_area} min_area={imovel.min_area} last_update={imovel.updated_at}
                min_price={imovel.min_price} max_bedrooms={imovel.max_bedrooms} min_bedrooms={imovel.min_bedrooms}
                max_suites={imovel.max_suites} min_suites={imovel.min_suites} max_parking={imovel.max_parking}
                min_parking={imovel.min_parking} max_bathrooms={imovel.max_bathrooms} min_bathrooms={imovel.min_bathrooms}
                price_per_private_square_meter={imovel.price_per_private_square_meter} orulo_url={imovel.orulo_url}
                updated_at={imovel.updated_at} address={imovel.address} img={imovel.default_image["520x280"]}
            />
          </div>
        )
      })

      return (
        <div className='bodyCardItem'>
          {listImoveis}
        </div>
      );
    }
  }

}

export default ListagemImoveis;