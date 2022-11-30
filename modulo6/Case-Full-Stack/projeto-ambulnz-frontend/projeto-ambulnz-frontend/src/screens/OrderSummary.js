import OrderItemCard from "../components/OrderItemCard";
import confirmarPedido from "../global/confirmarPedido.css"



function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <div className="containerSection">
            <h1 className="h1">Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard className=" pedidos"
                        key={pizza.name}
                        pizza={pizza}
                        removeFromCart={removeFromCart}
                    />
                )
            })}
            <h2 className="total">
                Total: {
                    total.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
            </h2>
            <button className="BotaoConfirmarPedido" onClick={confirmOrder}>Confirmar pedido</button>
        </div>
    )
}
export default OrderSummary