import './VerbDeck.css'

import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {DisplayVerbInfo } from './DisplayVerbInfo'


export const VerbDeck = () => {
    return(
        <div className='card'>
            <div className='card-body no-bottom'>
                <h5>1/5 Verbs Studied </h5>
                <DisplayVerbInfo />
                <div className='navigationArrowsContainer'>
                    <div className='navigationArrowLeft'><FontAwesomeIcon icon={faLongArrowAltLeft} size='3x'/></div>
                    <div className='navigationArrowRight'><FontAwesomeIcon icon={faLongArrowAltRight} size='3x'/></div>
                </div>
            </div>
        </div>
        )

}