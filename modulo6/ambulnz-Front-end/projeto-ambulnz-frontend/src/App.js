import { useState } from "react";
import styled from "styled-components"
import OrderSummary from "./screens/OrderSummary";
import PizzasMenu from "./screens/PizzasMenu";

export const ContainerMain = styled.main`
    display: flex;
`

function App() {
    const [ cart, setCart ] = useState([])

    const addToCart = (pizzaToAdd) => {
        // -1 se a pizza não existir
        // 0 pra cima se ela existir
        const foundIndex = cart.findIndex((pizzaInCart) => {
            return pizzaInCart.name === pizzaToAdd.name
        })

        if (foundIndex >= 0) {
            const newCart = [...cart]
            newCart[foundIndex].quantity += 1

            setCart(newCart)
        } else {
            const newCart = [...cart]
            const newPizza = {
                name: pizzaToAdd.name,
                price: pizzaToAdd.price,
                quantity: 1
            }

            newCart.push(newPizza)

            setCart(newCart)
        }
    }

    return (
        <ContainerMain>
            <PizzasMenu addToCart={addToCart} />
            <OrderSummary cart={cart} />
        </ContainerMain>
    );
}

export default App;
