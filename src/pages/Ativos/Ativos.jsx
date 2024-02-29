import './Ativos.css'
import {useState, useEffect} from 'react'
import AtivoBox from '../../components/AtivoBox/AtivoBox'

export const Ativos = (props)=>{
    const [ativos, setAtivos] = useState([])
    
    useEffect(()=>{
        setAtivos(props.data)
    },[props.data])


    return (
        <div className='ativos-main'>
            {ativos.map((item) => (
                <div key={item.id}>
                    <AtivoBox
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                        symbol={item.symbol}
                        price={item.price}
                        priceChange1d={item.priceChange1d}
                    />  
                </div>
            ))}
        </div>
    )
}