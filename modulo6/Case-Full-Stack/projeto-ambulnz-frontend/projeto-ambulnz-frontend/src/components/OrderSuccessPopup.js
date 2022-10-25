import resumoPedido from "../global/resumoPedido.css"



function OrderSuccessPopup(props) {
    const { order, closePopup } = props

    return (
        <main>
        <div className="containerDiv">
            <div className="orderItemCard">
                <h2 className="pedidoRealizado">Pedido realizado com sucesso!</h2>
                <h3 className="resumoPedido">Resumo do pedido</h3>
                <p className="idPedido">Id do pedido: { order.id }</p>
                { order.pizzas.map((pizza) => (
                    <p className="nomeEPreço" key={pizza.name}>
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                        {" "} x {pizza.quantity}
                    </p>
                )) }
                <p className="totalPago">
                    Total pago: {
                    order.total.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                </p>

                <span
                    className="close-popup"
                    onClick={closePopup}
                >
                    x
                </span>
            </div>
        </div>
        </main>
    )
}

export default OrderSuccessPopup