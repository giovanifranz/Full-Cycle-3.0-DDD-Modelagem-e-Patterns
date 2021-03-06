import { Order, OrderItem } from './domain/checkout/entity'
import { Customer } from './domain/customer/entity'
import { Address } from './domain/customer/value-object'

const customer = new Customer('123', 'Giovani Franz')
const address = new Address('Rua dois', 123, '12345-678', 'São Paulo')
customer.changeAddress(address)
customer.activate()
console.log('customer', customer)

const item_1 = new OrderItem('1', 'Item 1', 10, 'Product 1', 2)
const item_2 = new OrderItem('2', 'Item 2', 20, 'Product 2', 2)
const order = new Order('1', '123', [item_1, item_2])
console.log('order', order)
