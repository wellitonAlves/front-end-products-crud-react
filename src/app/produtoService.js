
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(erros) {
        this.errors = erros
}

export default class ProdutoService{


    validar = (produto) =>{
        const erros = []

        if(!produto.nome){
            erros.push('campo nome é obrigatório')
        }
        if(!produto.sku){
            erros.push('campo SKU é obrigatório')
        }
        if(!produto.preco || produto.preco <= 0){
            erros.push('campo preco é obrigatório')
        }
        if(!produto.fornecedor){
            erros.push('campo fornecedor é obrigatório')
        }

        if(erros.length > 0){
            throw new ErroValidacao(erros)
        }

    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    obterIndex = (sku) => {
        let index = null
        this.obterProdutos().forEach((produto,i) =>{
            if(produto.sku === sku){
                index = i
            }
        })
        return index
    }


    salvar = (produto) =>{

        this.validar(produto)
        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        const index = this.obterIndex(produto.sku)
        if(index == null){
            produtos.push(produto);
        }else{
            produtos[index] = produto
        }

        

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }


}