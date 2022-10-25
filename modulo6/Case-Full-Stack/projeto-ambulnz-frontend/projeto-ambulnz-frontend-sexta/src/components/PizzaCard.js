import  PizzaCardStyled from "../global/PizzaCardStyled.css"


function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <div className="container">
            
       
            <h3 className="name">{pizza.name}</h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <p className="igredientes">
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            <button className="button" onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
        </div>
    )
}

export default PizzaCard