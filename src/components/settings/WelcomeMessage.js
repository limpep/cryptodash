import React from 'react'
import { AppContext } from '../../App/AppProvider'

function WelcomeMessage({firstVisit}) {
    return (<AppContext.Consumer>
        {({firstVisit})=> firstVisit ? <div>
            Welcome to CryptoDash, select your favorite coins to begin.
        </div>: null}
    </AppContext.Consumer>
      
    )
}

export default WelcomeMessage
