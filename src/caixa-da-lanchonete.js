class CaixaDaLanchonete {
    constructor(metodoDePagamento,itens) {
        this.metodoDePagamento = metodoDePagamento;  
        this.itens = itens; 
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = [ 
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduiche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Extra do Sanduiche', valor: 2.00 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduiche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduiche', valor: 7.50 }
          ]
          
            if(metodoDePagamento == "dinheiro" || metodoDePagamento == "debito" || metodoDePagamento == "credito" ) {
              
              const adicionais= ["combo1","combo2","queijo","chantily"];
              const extraAdicionado = adicionais.some(valor => itens.includes(valor));
              const principal = ["cafe","suco","sanduiche","salgado"];
              const principalAdicionado = principal.some(valor => itens.includes(valor));
              
              
              if(!principalAdicionado && extraAdicionado){
                return console.log("Item extra não pode ser pedido sem o principal");
              }
              
              const itensAdicionados = itens
              let acumulador = 0;
              
              for(i = 0; i < itensAdicionados.length; i++) {
                const pedidoNoCarrinho = cardapio.filter(item => item.codigo == itensAdicionados[i])
                pedidoNoCarrinho.map((pedido)=>{
                  acumulador += pedido.valor
                })
              }
              if(metodoDePagamento == "dinheiro") {
                const valor = acumulador - (acumulador * 5 / 100)
                return console.log(`R$ ${valor.toFixed(2)}`)
              }
              if(metodoDePagamento == "credito") {
                const valor = acumulador + (acumulador * 3 / 100);
                return console.log(`R$ ${valor.toFixed(2)}`)
              }  
              if(metodoDePagamento == "debito") {
                return console.log(`R$ ${acumulador}`)
              }
            } else {
              return console.log("Forma de pagamento inválida!")
            }
        }
}
const metodoDePagamento = "debito"
const itens = ['chantily'];


const novoCaixaDaLanchonete = new CaixaDaLanchonete()
 .calcularValorDaCompra(metodoDePagamento, itens)


export { CaixaDaLanchonete };
