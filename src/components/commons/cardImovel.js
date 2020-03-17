import React, { Component } from 'react';
import axios from 'axios';
import '../styles/cardImovel.css'; // Importando toda a estilização do Card
import HeartIcon from '../svg/heartOn';
import ImovelInfoIcons from '../svg/imovelInfoIcons';

class CardImovel extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        favoritado: null,
        id: this.props.id,
        name: this.props.name,
        img: this.props.img,
        last_update: this.props.last_update,
        min_area: this.props.min_area,
        max_area: this.props.max_area,
        // Colocando o preço no padrão da moeda brasileira
        min_price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.props.min_price),
        min_bedrooms: this.props.min_bedrooms,
        max_bedrooms: this.props.max_bedrooms,
        min_suites: this.props.min_suites,
        max_suites: this.props.max_suites,
        min_parking: this.props.min_parking,
        max_parking: this.props.max_parking,
        min_bathrooms: this.props.min_bathrooms,
        max_bathrooms: this.props.max_bathrooms,
        price_per_private_square_meter: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.props.price_per_private_square_meter),
        updated_at: this.props.updated_at,
        orulo_url: this.props.orulo_url,
        address: this.props.address,
        default_image: this.props.default_image
    }

    async componentDidMount() {
        // Verificando se o imóvel está favoritado no banco
        const url = "http://localhost:3020/dados/favoritados";
        await axios.get(url)
            .then(res => {
                for (let idImovel of res.data) {
                    if (this.state.id == idImovel.id) {
                        return this.setState({ favoritado: true });
                    }
                }
                this.setState({ favoritado: false });
            })
    }

    async favoritar(objectId) { // Capta o ID do imóvel e adiciona na lista de favoritados
        const url = "http://localhost:3020/dados/favoritados/add";
        await axios.post(url, { id: objectId })
            .then(res => {
                this.setState({ favoritado: true });
                window.alert("Imóvel Favoritado");
            })
    }

    async desFavoritar(objectId) { // Capta o ID do imóvel e remove da lista de favoritados
        // Passa o ID do Imóvel para ser deletado no Back
        const url = `http://localhost:3020/dados/favoritados/remove/${objectId}`;
        axios.delete(url)
            .then(res => {
                this.setState({ favoritado: false });
                window.alert("Imóvel Desfavoritado");
            })
    }

    render() {
        return (
            // Card do Imóvel
            <div className='cardImovel'>

                {/* Imagem do Imóvel e Botão Favoritar */}
                <div className='imgComponent'>
                    {
                        this.state.favoritado ? ( // Alternagem dos botões de favoritação
                            <button className='favoriteOn'
                                onClick={() => this.desFavoritar(this.state.id)}>
                                <HeartIcon favorite={true} />
                            </button>
                        ) : (
                                <button className='favorite'
                                    onClick={() => this.favoritar(this.state.id)}>
                                    <HeartIcon favorite={false} />
                                </button>
                            )
                    }

                    <div className='imgImovel'>
                        <img src={this.state.img}></img>
                    </div>
                </div>

                {/* Container de Todas as Informações do Imóvel */}
                <div className='imovelInfo'>
                    <div className='title'>
                        {this.state.name}
                    </div>

                    <div className='prices'>
                        <div className='mainPrice'>
                            {this.state.min_price}
                        </div>
                        <div className='promoPrice'></div>
                    </div>

                    <div className='listInfo'>
                        <div className='row'>
                            {/* Valor do Metro Quadrado */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="area" />
                                </div>
                                <div className='text'>{this.state.price_per_private_square_meter}/m²</div>
                            </div>

                            {/* Metro Quadrado */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="area" />
                                </div>
                                <div className='text'>
                                    {
                                        this.state.min_area + "m² - " + this.state.max_area + "m²"
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Localização */}
                        <div className='row'>
                            <div className='icon'>
                                <ImovelInfoIcons icon="locate" />
                            </div>
                            <div className='text'>
                                {
                                    this.state.address.street_type + " " + this.state.address.street + ", " +
                                    this.state.address.number + ", " + this.state.address.area + " - " +
                                    this.state.address.city + "/" + this.state.address.state
                                }
                            </div>
                        </div>

                        {/* Itens do Imóvel */}
                        <div className='row'>
                            {/* Quartos */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="bed" />
                                </div>
                                <div className='text'>
                                    {
                                        this.state.min_bedrooms + " - " + this.state.max_bedrooms
                                    }

                                </div>
                            </div>

                            {/* Suítes */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="suite" />
                                </div>
                                <div className='text'>
                                    {
                                        this.state.min_suites + " - " + this.state.max_suites
                                    }
                                </div>
                            </div>

                            {/* Banheiros */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="shower" />
                                </div>
                                <div className='text'>
                                    {
                                        this.state.min_bathrooms + " - " + this.state.max_bathrooms
                                    }

                                </div>
                            </div>

                            {/* Garagens */}
                            <div className='cardInformation'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="car" />
                                </div>
                                <div className='text'>
                                    {
                                        this.state.min_parking + " - " + this.state.max_parking
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Estado do Imóvel: Construção/Construido
                 <div className='imovelState'>
                    <div className='stateIcon'></div>
                </div> */}

                {/* Container da Última Atualização e Botão Detalhes */}
                <div className='detailComponent'>
                    <div className='updatedContainer'>
                        <div className='lastUpdate'>
                            <div className='icon'>
                                <ImovelInfoIcons icon="lastUpdate" />
                            </div>
                            <div className='lastUpdateText'>{this.state.last_update}</div>

                        </div>

                        <div className='detailContainer'>
                            <button onClick={() => window.location = this.state.orulo_url} className='buttonContainer'>
                                <div className='icon'>
                                    <ImovelInfoIcons icon="detail" />
                                </div>
                                <div className='buttonName'>DETALHES</div>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            //     <li>{this.state.updated_at}</li>
            //     <li>{this.state.address.city}</li>
        );
    }
}

export default CardImovel;