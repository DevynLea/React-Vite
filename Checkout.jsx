
import { useState } from 'react';

function onlyDigits(s) {
    return s.replace(/\D/g, "");
}


function isValidLuhn(cardNumber) {
    const digits = onlyDigits(cardNumber);
    if (digits.length < 13 || digits.length > 19) return false;


    let sum = 0;
    let shouldDouble = false;


    for (let i = digits.length - 1; i >= 0; i--) {
        let d = Number(digits[i]);
        if (shouldDouble) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        sum += d;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}


function isValidExpiry(mmYY) {

    if (!/^\d{2}\/\d{2}$/.test(mmYY)) return false;

    const [mmStr, yyStr] = mmYY.split("/");
    const mm = Number(mmStr);
    const yy = Number(yyStr);

    if (mm < 1 || mm > 12) return false;


    const now = new Date();
    const currentYY = Number(String(now.getFullYear()).slice(-2));
    const currentMM = now.getMonth() + 1;

    if (yy < currentYY) return false;
    if (yy === currentYY && mm < currentMM) return false;

    return true;
}

export default function Checkout({product, onBack}) {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [message, setMessage] = useState("");

    const handlePurchase = (e) => {
        e.preventDefault();

        if (name.trim().length < 2) {
            setMessage("Please enter a valid name.");
            return;
        }

        if (!isValidLuhn(cardNumber)) {
            setMessage("Card number does not appear to be valid.");
            return;
        }

        if (!isValidExpiry(expiry)) {
            setMessage("Expriy date must look like MM/YY and not be expired.");
            return;
        }
        if (!/^\d{3,4}$/.test(cvv)) {
            setMessage("CVV must be 3 or 4 digits.");
            return;
        }

        setMessage("Purchase successful!");
    


            
        };

        return (
            <div className="checkout">
                <button className="link" onClick={onBack}>Back to products</button>
                

                <h2>Checkout</h2>

                <div className="checkout-details">
                    <img className="checkout-img" src={product.image} alt={product.name} />
                    <div>
                        <h3>{product.name}</h3>
                        <p className="muted">{product.description}</p>
                        <p className="price">Total: ${product.price.toFixed(2)}</p>
                    </div>
                </div>

                
                    
                <form className="checkout-form" onSubmit={handlePurchase}> 
                    <label>
                        Name on Card
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                        
                    </label>

                    <label>
                        Card Number
                        <input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        />
                    </label>

                    <div className="row">
                        <label>
                            Expiry (MM/YY)
                            <input
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="02/28"
                            />
                        </label>

                        <label>
                            CVV
                            <input
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            />
                        </label>
                
                 </div> 

                 <button className="btn"    type="submit">Purchase</button>

                 
                {message && <p className="message">{message}</p>}
                </form>
            </div>


        );

}

    
