import carrinhoPedido from "../global/carrinhoPedido.css"

function OrderItemCard(props) {
    const { pizza, removeFromCart } = props

    return (
        <div className="orderItem">

            <p className="texto">
                Pizza {pizza.name}
                - {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
                {" "} x {pizza.quantity}
            </p>
            <button className="Button" onClick={() => removeFromCart(pizza)}>Remover item</button>
            {/* <div className="ImagemOrderItem">
            <img  src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=170667a&w=0&h=rnpCqZe2wx-4A6V8z91tAS_YRAJWlzySjKbU7f-1Nj8="></img>
            </div> */}
        </div>
    )
}

export default OrderItemCard