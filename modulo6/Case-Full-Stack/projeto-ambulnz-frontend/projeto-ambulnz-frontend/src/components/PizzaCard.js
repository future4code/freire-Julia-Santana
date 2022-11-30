import PizzaCardStyled from "../global/PizzaCardStyled.css"

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
            <img className="imagemCard" src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=170667a&w=0&h=rnpCqZe2wx-4A6V8z91tAS_YRAJWlzySjKbU7f-1Nj8="></img>
            <button className="button" onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
        </div>
    )
}

export default PizzaCard