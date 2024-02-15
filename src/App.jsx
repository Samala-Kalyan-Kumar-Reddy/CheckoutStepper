import './App.css'
import Checkoutstepper from './components/stepper'
const CHECKOUT_STEPS=[
  {
    name:"Customer Info",
    Components:()=><div>Provide your contact details.</div>
  },
  {
    name:"Shipping Info",
    Components:()=><div>Enter Your Shipping Addresss.</div>
  },
  {
    name:"Payment",
    Components:()=><div>Complete the payment for your order.</div>
  },
  {
    name:"Delivered",
    Components:()=><div>Your order has been delivered.</div>
  },
]
function App() {


  return (
    <div className='body'>
    <h2>Checkout</h2>
    <Checkoutstepper stepsconfig={CHECKOUT_STEPS} />
    </div>
    
  )
}

export default App
