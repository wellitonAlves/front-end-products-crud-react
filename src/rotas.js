import React from 'react'
import {HashRouter,Switch, Route} from 'react-router-dom'
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'


export default () => {
    return(
        <HashRouter>
            <switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/" component={Home} />
            </switch>
        </HashRouter>
    )
}