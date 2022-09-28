import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {v4} from 'uuid'
import { authentication } from "./services/authentication"

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

const tokeninstaciado = new authentication()
const token = tokeninstaciado.generateToken(id)
console.log(token);

const tokenData = tokeninstaciado.getTokenData(token)
console.log(tokenData);