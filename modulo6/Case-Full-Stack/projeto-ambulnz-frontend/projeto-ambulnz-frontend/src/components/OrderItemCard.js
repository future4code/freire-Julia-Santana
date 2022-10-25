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
            <button  className="Button" onClick={() => removeFromCart(pizza)}>Remover item</button>
        </div>
    )
}

export default OrderItemCard