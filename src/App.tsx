import './App.css'
import Hero from './components/homepage/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/productdetail/Detail';
import NotFound from './NotFound';
import MainCatalog from './components/mainCatalog/MainCatalog';
import Shopping from './components/shoppingCart/Shopping';
import WishList from './components/wishlist/WishList';
import CheckOut from './components/checkout/CheckOut';
import Signup from './components/sIgnup/Signup';
import Login from './components/sIgnup/Login';
import Payment from './components/Profile/Payment.tsx'
import  Voucher  from './components/Profile/Voucher.tsx'
import Orders from './components/Profile/Orders.tsx'
import AccountDetails from './components/Profile/AccountDetails.tsx'
function App() {


    return (
        <>             
           <div
               style={{
                   maxWidth: '1280px',
               }
               }
               className="App font-inter mx-auto">
            <Router>

                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={[ <Hero />]} />
                        <Route path="/detail/:id" element={[<Detail />]} />
                        <Route path="/catalog" element={[<MainCatalog />,]} />
                        <Route path="/shopping" element={[<Shopping />,]} />
                        <Route path="/wishlist" element={[<WishList />,]} />
                        <Route path="/checkout" element={[<CheckOut />,]} />
                        <Route path="/account/profile" element={[<AccountDetails />,]} />
                        <Route path="/account/orders" element={[<Orders />,]} />
                        <Route path="/account/payment" element={[<Payment />,]} />
                        <Route path="/account/voucher" element={[<Voucher />,]} />
                        <Route path="*" element={[<NotFound />,]} />
                    </Routes>
                  </Router> 
                </div>
        </>
    )
}

export default App
