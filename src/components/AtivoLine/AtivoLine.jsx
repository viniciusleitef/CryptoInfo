import './AtivoLine.css'
import {useState, useEffect} from 'react'

function AtivoLine(props){
    const [color, setColor] = useState('#0ECB81')
    const [valorization, setValorization] = useState('+')

    const colorPick = (valor)=>{
        if(valor < 0){
            setColor('#F6465D')
            setValorization(valor + '%')
        }else{
            setColor('#0ECB81')
            setValorization('+' + valor + '%')
        }
    }

    useEffect(() => {
        colorPick(props.priceChange1d);
    }, [props.priceChange1d]);

    return( 
        <div className='ativoLine-content'>
            <div className='ativo-info-box'>
                <img src={props.icon} alt={props.name + "icon"} />
                <p><span className='ativo-symbol'>{props.symbol}</span></p>
                <p><span className='ativo-name'>{props.name}</span></p>
            </div>

            <div className='ativo-price-box'>
                <p><span className='ativo-price'>${parseFloat(props.price.toFixed(2))}</span></p>
            </div>

            <div className='ativo-valorization-box'>
                <p><span className="ativo-valorization" style={{color: color}}>{valorization}</span></p>
            </div>
        </div>
    )
}

export default AtivoLine