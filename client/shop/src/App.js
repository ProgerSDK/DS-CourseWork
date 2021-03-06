import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import HomeContainer from './components/Home/HomeContainer'
import ProductPageContainer from './components/common/ProductPage/ProductPageContainer'
import CategoryPageContainer from './components/CategoryPage/CategoryPageContainer'
import { path } from './paths'
import CartContainer from './components/Cart/CartContainer'
import CheckoutContainer from './components/Checkout/CheckoutContainer'
import Search from './components/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='wrapper'>
          <HeaderContainer />
          <div className='center'>
            <div className='navWrapper'>
              <Navbar />
            </div>
            <div className='contentWrapper'>
              <Route
                exact
                name='dashboard'
                path='/'
                render={() => <Redirect to={path.home} />}
              />
              <Route
                exact
                name='home'
                path={path.home}
                render={() => <HomeContainer />}
              />
              <Route exact path={path.cart} render={() => <CartContainer />} />
              <Route
                exact
                path={path.checkout}
                render={() => <CheckoutContainer />}
              />
              <Route
                exact
                path={path.products}
                render={() => <CategoryPageContainer title='Всі товари' />}
              />
              <Route
                exact
                path={path.accessories}
                render={() => (
                  <CategoryPageContainer
                    title='Аксесуари'
                    category='accessories'
                  />
                )}
              />
              <Route
                exact
                path={path.footwear}
                render={() => (
                  <CategoryPageContainer title='Взуття' category='footwear' />
                )}
              />
              <Route
                exact
                path={path.pants}
                render={() => (
                  <CategoryPageContainer title='Штани' category='pants' />
                )}
              />
              <Route
                exact
                path={path.shirts}
                render={() => (
                  <CategoryPageContainer title='Сорочки' category='shirts' />
                )}
              />
              <Route
                exact
                path={path.tshirts}
                render={() => (
                  <CategoryPageContainer title='Футболки' category='tshirts' />
                )}
              />
              <Route
                exact
                path={path.shorts}
                render={() => (
                  <CategoryPageContainer title='Шорти' category='shorts' />
                )}
              />
              <Route
                exact
                path={path.productPage}
                render={() => <ProductPageContainer />}
              />
              <Route
                exact
                path={path.search}
                render={() => <Search />}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
