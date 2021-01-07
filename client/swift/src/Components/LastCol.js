import React, { Fragment } from 'react'
import Chatbody from './Chatbody'
import Chatfooter from './Chatfooter'
import Chatheader from './Chatheader'

function LastCol() {
    return (
        <Fragment>
            <div className="flex flex-col w-3/6 h-full justify-begin">
                <Chatheader />
                <Chatbody />
                <Chatfooter />
            </div>
        </Fragment>
    )
}

export default LastCol
