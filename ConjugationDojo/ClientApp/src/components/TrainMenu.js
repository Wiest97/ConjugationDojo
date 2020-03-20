import React, { useState,  } from 'react'
import './styles/TrainMenu.css'

export function TrainMenu() { 
    return (
        <div>
            <h2> Training Menu </h2>
            <hr />
            <div className='wrapper'>
                <button id='plainForm' className="grid-header menu-button" onClick={() => {window.location.href='/LearnVerbs'}} > Learn New Verbs </button>
                <button id='formalNonpast' className="menu-button"> Practice Plain Form </button>
                <button id='formalPast' className="menu-button"> Practice Formal Past </button>
                <button id='formalNegative' className="menu-button"> Practice Formal Negative </button>
                <button id='formalNegativePast' className="menu-button"> Practice Formal Negative Past </button>
                <button id='plainNegative' className="menu-button"> Practice Plain Negative </button>
                <button id='plainPast' className="menu-button"> Practice plain past </button>
            </div>
        </div>
        )
}
