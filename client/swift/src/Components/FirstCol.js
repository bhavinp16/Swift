import React from 'react';
import Col1profile from './Col1profile';
import Col1row1 from './Col1row1';
import Col1selections from './Col1selections';

function FirstCol() {
    return (
        <div className="bg-gray-900 w-1/6">
            <Col1row1 /> 
            <Col1profile />
            <Col1selections />
           
        </div>
    )
}

export default FirstCol
