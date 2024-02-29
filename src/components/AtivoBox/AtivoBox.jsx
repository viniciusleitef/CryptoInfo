import ActionButton from '../ActionButton/ActionButton'
import './AtivoBox.css'
import { useState, useEffect } from 'react'

function AtivoBox ({ id, name, icon, symbol, price, priceChange1d }){

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
        colorPick(priceChange1d);
    }, [priceChange1d]);

    if (!id || !name || !icon || !symbol || !price || !priceChange1d) {
        return null;
    }

    return(
        <div className='ativoBox-main'>
            <header>
                <img src={icon} alt="" />
                <p style={{color: color}}>{valorization}</p>
            </header>

            <div className='ativoBox-info'>
                <p>{name}</p>
                <h3>${parseFloat(price.toFixed(2))}</h3>
            </div>

            <div className='atiboBox-footer'>
                <ActionButton name='view' link={'/Ativos/' + id}/>
            </div>
        </div>
    )
}

export default AtivoBox