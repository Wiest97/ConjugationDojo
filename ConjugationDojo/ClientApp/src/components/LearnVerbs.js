import React, {useState, useEffect} from 'react';
import {JTextBox} from './JTextBox.js'
import {getNewVerbs} from './services/QuestionService.js'
import {VerbDeck } from './VerbDeck'

export const LearnVerbs = () => {

    return (
        <div>
            <VerbDeck cards={getNewVerbs()}/>
        </div>
        )
};
