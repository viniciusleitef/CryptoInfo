import './AtivosDetalhes.css'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react' 
import axios from 'axios';

export const AtivosDetalhes = ()=>{
    const { id } = useParams();
    const [data, setData] = useState([])
    const [color1h, setColor1h] = useState('#0ECB81')
    const [color1d, setColor1d] = useState('#0ECB81')
    const [color1w, setColor1w] = useState('#0ECB81')

    const [valorization1h, setValorization1h] = useState('+')
    const [valorization1d, setValorization1d] = useState('+')
    const [valorization1w, setValorization1w] = useState('+')

    
    const colorPick = (valor1h, valor1d, valor1w)=>{
        if(valor1h < 0){
            setColor1h('#F6465D')
            setValorization1h(valor1h + '%')
        }else{
            setColor1h('#0ECB81')
            setValorization1h('+' + valor1h + '%')
        }

        if(valor1d < 0){
            setColor1d('#F6465D')
            setValorization1d(valor1d + '%')
        }else{
            setColor1d('#0ECB81')
            setValorization1d('+' + valor1d + '%')
        }

        if(valor1w < 0){
            setColor1w('#F6465D')
            setValorization1w(valor1w + '%')
        }else{
            setColor1w('#0ECB81')
            setValorization1w('+' + valor1w + '%')
        }

    }   

    const options = {
        method: 'GET',
        url: 'https://openapiv1.coinstats.app/coins/'+id,
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'ttycL7dZqAufBppd0Utm1Wujv4OmDXA88kJF1y0T45E='
        }
      };
   
      useEffect(()=>{
        axios.request(options).then(function (res){
            setData(res.data)
            colorPick(res.data.priceChange1h, res.data.priceChange1d, res.data.priceChange1w)
        }).catch(function (error) {
            console.error(error);
        });   
        

      }, [])

      if(!data.price || !data.priceChange1h || !data.priceChange1d || !data.priceChange1w){
        return <div>carregando...</div>
      }
    return(
        <div className='detalhes-main'>
        <div className='detalhes-box'>
            <div className='header'>
                <img src={data.icon} alt={data.name} />
                <p>{data.name}</p>
                <p>{data.symbol}</p>
                <p>Rank: {data.rank}</p>
                <p>Price: ${parseFloat(data.price.toFixed(2))}</p>
                <p >Price Change (1h): <span style={{color: color1h}}>{valorization1h}</span></p>
                <p >Price Change (1d): <span style={{color: color1d}}>{valorization1d}</span></p>
                <p >Price Change (1w): <span style={{color: color1w}}>{valorization1w}</span></p>
                <p>Volume: ${parseFloat(data.volume.toFixed(2))}</p>
                <p>Market Cap: ${parseFloat(data.marketCap.toFixed(2))}</p>
                <p>Available Supply: {data.availableSupply} {data.symbol}</p>
                <p>Total Supply: {data.totalSupply} {data.symbol}</p>
            </div>
        
        </div>
    </div>
    )
}
