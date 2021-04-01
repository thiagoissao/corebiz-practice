import React, { useEffect, useState } from 'react'
import { getProducts, postNewsletter } from '../src/services/api'
import './App.css';
import ListProductCard from './components/ListProductCard';
import NewsletterForm from './components/NewsletterForm'

const App = () => {

  const [products, setProducts] = useState([])

  const findProducts = async () => {
    const response = await getProducts()
    if (response.ok) {
      setProducts(response.data)
    }
  }

  const handleSubmitNewsletter = async form => {
    const response = await postNewsletter(form)
    if (response.ok) {
      alert('Formulário enviado!')
      return
    }
    alert(`ERRO: ${response.message}`)
  }

  useEffect(() => {
    findProducts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Corebiz Practice</p>
      </header>
      <div className="Banner">
        <p>Think beautiful banners here</p>
      </div>
      <div className="List">
        <ListProductCard products={products} />
      </div>
      <div className="Newsletter">
        <NewsletterForm onClick={handleSubmitNewsletter} />
      </div>
    </div>
  );
}

export default App;
