

export default function ProductCard({ product, onBuy }) {


    return (
        <div className="product-card">

        <img
        src={product.image}
        alt={product.name}
        style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className="btn" onClick={onBuy}>Buy Now</button>




        </div>
    );












}





    
    



