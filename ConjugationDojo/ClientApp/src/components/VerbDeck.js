import './styles/VerbDeck.css'

import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {DisplayVerbInfo } from './DisplayVerbInfo'


export const VerbDeck = (props) => {
    const [index, setIndex] = useState(0);

    return(
        <div className='card'>
            <div className='card-body no-bottom'>
                <h5>{index + 1}/{5} Verbs Studied </h5>
                <DisplayVerbInfo card={props.cards[index]} kuroshiro={props.kuroshiro}/>
                <div className='navigationArrowsContainer'>
                    <div className='navigationArrowLeft' onClick={() => {if(index > 0) setIndex(index -1)}}><FontAwesomeIcon icon={faLongArrowAltLeft} size='3x'/></div>
                    <div className='navigationArrowRight' onClick={() => {if(index < 4) setIndex(index + 1)}}><FontAwesomeIcon icon={faLongArrowAltRight} size='3x'/></div>
                </div>
            </div>
        </div>
        )

}
