import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header';
import Home from '../src/Components/Home';
import Restaurant from '../src/Components/Resturant';
import Pizza from '../src/Components/Pizza';
import RestaurantPizza from '../src/Components/ResturantPizza';
import './App.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or send it to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom fallback UI here
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Router>
    
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants/:id" element={<Restaurant />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/restaurant_pizzas" element={<RestaurantPizza />} />
            </Routes>
          </main>
        </div>
     
    </Router>
  );
}

export default App;