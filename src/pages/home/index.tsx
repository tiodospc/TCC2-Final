import './style.scss'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga4";

type IHomeProps = {
    event?: MouseEvent<HTMLImageElement, MouseEvent>
    baseUrl?: string,
    idImg: string,
    typeEvent: string
    user: string,
    name: string,
    data: number,
    idUser: number
}

export const Home = () => {

    const alexa = 'https://m.media-amazon.com/images/I/61gufBsGK7L._AC_SL1000_.jpg'
    const [eventImagem, setEventImage] = useState<Array<IHomeProps>>([])
    const history = useNavigate();


    const redirectToContactPage = () => {
        history('/contact')
    }      

    const handlerClickImage = (event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) => {
        
        const eventImagema:Array<IHomeProps> = [
            {
                idUser: 2,
                user: "user_fake-1",
                idImg: event.currentTarget.id,
                name: event.currentTarget.tagName,
                baseUrl: event.currentTarget.baseURI,
                data: event.timeStamp,
                typeEvent: event.type
            }
        ]
        setEventImage(eventImagema)
    }

    const refDoelement = useRef<any>(null)

    

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        console.log(refDoelement)
        console.log(e)
    }

   
    const handlerClickButton = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault() 

        ReactGA.event({
            category: 'Cart',
            action: 'Add to Cart',
            label: 'Button Clicked'
        });
    }

    
    return (
        <div>
            <TextField 
                id="outlined-basic" 
                label="Procurar produto" 
                variant="outlined"
                onChange={(event) => handleInput(event)}
            />
            <Button variant="contained" onClick={redirectToContactPage} className="btnRedirect">
                Contate-nos 
            </Button>

             <div className='container'>
                <div>
                    <img 
                        src={alexa} 
                        alt="alexa"
                        id="imagem-compra-alexa"
                        onClick={(event) => handlerClickImage(event)} 
                        ref={refDoelement}
                    />
                </div>
                <div>
                    <Card className='price' sx={{ minWidth: 275 }}>

                        <div className='description'>
                            <h3>Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta</h3>
                            <span>Marca: Amazon</span>
                            <span>128.901 avaliações de clientes</span>
                            <span>1000+perguntas respondidas</span>
                        </div>
                        <div className='description-price'>
                            <h2>215,55</h2>
                            <span>à vista (5% off) ou R$ 229,00 em até 11x de R$ 20,90 sem juros </span>
                        </div>
                        <div className='description-text'>
                            <ul>
                                <li>
                                    O Echo Dot é o nosso smart speaker de maior sucesso. 
                                    Controlado por voz com a Alexa, 
                                    ele é perfeito para qualquer ambiente. 
                                    Você pode pedir músicas, notícias, informações e muito mais. 
                                    Além de ligar para amigos e familiares e controlar dispositivos compatíveis 
                                    de casa inteligente com sua voz.
                                </li>
                                <li>
                                    Peça para a Alexa tocar músicas, responder perguntas, ler as notícias, 
                                    checar a previsão do tempo, criar alarmes, controlar 
                                    dispositivos de casa inteligente compatíveis 
                                    e muito mais.
                                </li>
                                <li>
                                    Ouça músicas do Amazon Music, Apple Music, Spotify, 
                                    Deezer e outros usando o alto-falante integrado com um 
                                    som envolvente.
                                </li>
                                <li>
                                    Faça chamadas para o aplicativo Alexa ou outros dispositivos
                                    Echo compatíveis sem usar suas mãos. Envie avisos para outros 
                                    dispositivos Echo em sua casa.
                                </li>
                                <li>
                                    A Alexa está sempre aprendendo e adicionando novas Skills, como jogos, notícias e muito mais.
                                </li>
                                <li>
                                    Com 4 microfones de longo alcance, a Alexa ouve você do outro lado do cômodo. 
                                    E com dispositivos Echo compatíveis em diferentes cômodos, você pode ouvir música em toda a sua casa. 
                                </li>
                                <li>
                                    Também é possível conectar o Echo aos seus próprios alto-falantes por Bluetooth ou com um cabo de áudio de 3,5 mm.
                                </li>
                                <li>
                                    Use sua voz para acender as luzes, trancar as portas e muito mais com dispositivos de casa inteligente compatíveis.
                                </li>

                            </ul>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className='price' sx={{ minWidth: 275 }}>
                        <h1>R$217,55</h1>
                        <span>à vista</span> 
                        <p>Ou em até 11x de R$ 20,90/mês</p> 
                        <p>Entrega GRÁTIS: Quarta-feira, 29 de Junho</p>
                        <p>Ou Entrega mais rápida: Terça-feira, 21 de Junho</p>
                        <h1>Em estoque</h1>
                        <p>Quantidade: 10</p>
                        <Button 
                            className="button-add" 
                            variant="contained" 
                            onClick={(event) => handlerClickButton(event)}                    
                        >
                            Adicionar no carrinho
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    )}

