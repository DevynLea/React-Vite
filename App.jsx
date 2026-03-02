import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProductCard from './ProductCard.jsx'
import Checkout from './Checkout.jsx'




function App() {

    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Gon Freecss T-shirt",
            category: "men",
            price: 19.99,
            description: "Men's cotton t-shirt featuring Gon Freecss from Hunter x Hunter.",
            image: "/gonShirt.png"
        },
        {
            id: 2,
            name: "Killua Zoldyck T-shirt",
            category: "men",
            price: 19.99,
            description: "Men's cotton t-shirt featuring Killua Zoldyck from Hunter x Hunter.",
            image: "/Killua.png"
        },
        {
            id: 3,
            name: "Hisoka T-shirt",
            category: "men",
            price: 19.99,
            description: "Men's cotton t-shirt featuring Hisoka from Hunter x Hunter.",
            image: "/Hisoka.png"
        },
        {
            id: 4,
            name: "Hunter x Hunter cast T-shirt",
            category: "women",
            price: 15.99,
            description: "Women's cotton t-shirt featuring the main cast of Hunter x Hunter.",
            image: "/Anime.png"
        },
        {
            id: 5,
            name: "Adult Gon Freecss T-shirt",
            category: "women",
            price: 18.99,
            description: "Women's cotton t-shirt featuring an adult version of Gon Freecss from Hunter x Hunter.",
            image: "/adultGon.png"
        },
        {
            id: 6,
            name: "Gon action figure",
            category: "toys",
            price: 29.99,
            description: "Highly detailed action figure of Gon Freecss from Hunter x Hunter.",
            image: "/Gon.png"
        },
        {
            id: 7,
            name: "Hunter x Hunter character action figure set",
            category: "toys",
            price: 49.99,
            description: "Set of action figures featuring the main characters from Hunter x Hunter.",
            image: "/Characters.png"
        },
        {
            id: 8,
            name: "Hunter x Hunter Lunchbox",
            category: "accessories",
            price: 14.99,
            description: "Lunchbox featuring artwork from Hunter x Hunter, perfect for school or work.",
            image: "/lunchbox1.png"
        },
        {
            id: 9,
            name: "Gon Freecss Lunchbox",
            category: "accessories",
            price: 14.99,
            description: "Lunchbox featuring Gon Freecss from Hunter x Hunter, perfect for school or work.",
            image: "/Gonlunchbox.png"
        }
    ];

    const visibleProducts =
    activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);


    return(
        <>
       <Header setActiveCategory={setActiveCategory}/>

       <main className="container">


        {selectedProduct ? (
            <Checkout 
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            />
        ) : (
            <div className="product-grid">
                {visibleProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    onBuy={() => setSelectedProduct(product)}
                    />
                ))}
            </div>

        )}


      
            
        
        
        

       </main>
        
        <Footer/>
        
        

        
        
        
        
        </>
    );


    





}



export default App