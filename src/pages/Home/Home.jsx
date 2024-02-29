import {Link} from 'react-router-dom'
import './Home.css'
import { useState, useEffect } from 'react'
import ActionButton from '../../components/ActionButton/ActionButton'
import AtivoLine from '../../components/AtivoLine/AtivoLine'

export const Home = (props)=>{
    const [topAtivos, setTopAtivos] = useState([])
    const [loading, setLoading] = useState(true);

    const getTopAtivos = (data)=>{
        const arrayAux = []
        for(let i = 0; i < 4; i++){
            arrayAux.push(data[i])
        }
        setTopAtivos(arrayAux)
    }

    useEffect(()=>{
        if (props.data.length > 0) {
            getTopAtivos(props.data)
            setLoading(false);
        }
    }, [props.data]);

    if(loading){
        return <h1 className='carregando'>Carregando...</h1>
    }

    return (
        <div className='main-home'>
           <div className='home-content1'>
                <div className="home-box1">
                    <div className="title-box1">
                        <h1>ANALISAR ATIVOS NUNCA FOI TÃO FÁCIL</h1>
                    </div>

                    <form action="#" className='home-email-form'>
                        <input type='text' placeholder='E-mail/Telefone'/>  
                        <ActionButton name='Comece Agora'/>
                    </form>

                    <h3 className='home-box1-text'>Registre-se agora e Tenha acesso antecipado sobre Cryptos</h3>
                </div>

                <div className="home-box2">
                    <div className="home-melhores-ativos">
                        <AtivoLine 
                            name={topAtivos[0].name}
                            icon={topAtivos[0].icon}
                            symbol={topAtivos[0].symbol}
                            price={topAtivos[0].price}
                            priceChange1d={topAtivos[0].priceChange1d}
                        />

                        <AtivoLine 
                            name={topAtivos[1].name}
                            icon={topAtivos[1].icon}
                            symbol={topAtivos[1].symbol}
                            price={topAtivos[1].price}
                            priceChange1d={topAtivos[1].priceChange1d}
                        />

                        <AtivoLine 
                            name={topAtivos[2].name}
                            icon={topAtivos[2].icon}
                            symbol={topAtivos[2].symbol}
                            price={topAtivos[2].price}
                            priceChange1d={topAtivos[2].priceChange1d}
                        />

                        <AtivoLine 
                            name={topAtivos[3].name}
                            icon={topAtivos[3].icon}
                            symbol={topAtivos[3].symbol}
                            price={topAtivos[3].price}
                            priceChange1d={topAtivos[3].priceChange1d}
                        />
                        <p className='small-text'> <Link to='/Ativos' className='noLink'>Ver todas as Cryptos</Link></p>
                    </div>

                    <div className="home-box2-text">
                        <p className='small-text'>Explore o mundo das criptomoedas e aprimore seus conhecimentos financeiros.</p>
                        <p className='small-text'>Acompanhe o mercado de criptomoedas e encontre oportunidades de aprendizado constantes.</p>
                    </div>
                </div>
           </div>

           <div className='home-content2'>
                <h2>Para usuários cadastrados</h2>
                <h1>Ganhe <span className='yellow'>INFORMAÇÕES EXCLUSIVAS </span>sobre o mercado</h1>
                <ActionButton name='Inscreva-se'/>
           </div>
        </div>
    )
}