import React from 'react'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'
import Card from '../../components/card'
import ProdutosTable from './produtosTable'

 class ConsultaProduto extends React.Component{
    state ={
        produtos:[]
    }
    constructor(){
        super()
        this.service = new ProdutoService();
    }

    //faz parte do ciclo de vida do react
    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }

    preparaEditar = (sku) =>{
        console.log(sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }
    deletar = (sku) => {
       const produtos = this.service.deletar(sku)
       this.setState({produtos})
    }

        render(){
            return(

                <Card header="Consulta de Produtos">
                    <ProdutosTable produtos={this.state.produtos}
                                   editarAction={this.preparaEditar} 
                                   deletarAction={this.deletar} />
                </Card>
            )
        }

}


export default withRouter(ConsultaProduto)