import React from 'react'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

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

        render(){
            return(

                <div className="card">
                    <div className="card-header">
                        Consulta de Produtos
                    </div>
                <div className="card-body">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map((produto,index) =>{
                                return(
                                    <tr key={index}>
                                        <th>{produto.nome}</th>
                                        <th>{produto.sku}</th>
                                        <th>{produto.preco}</th>
                                        <th>{produto.fornecedor}</th>
                                        <th>
                                            <button onClick={() =>this.preparaEditar(produto.sku)} className="btn mr-1 btn-primary">Editar</button>
                                            <button className="btn mr-1 btn-danger">Remover</button>
                                        </th>
                                    </tr>
                                )})}
                        </tbody>
                    </table>
                    </div>
                </div>
            )
        }

}


export default withRouter(ConsultaProduto)