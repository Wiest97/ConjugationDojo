import React from 'react'
import Kuroshiro from 'kuroshiro'
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'
export const DisplayVerbInfo = (props) => {
    return(
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{props.card.verb}</h5>
                <p className='card-title'>{props.card.furigana}</p>
                <h6 className='card-subtitle'> {props.card.definition}</h6>
                <p className='card-text'>{props.card.note}</p>
            </div>
        </div>
    )
}
