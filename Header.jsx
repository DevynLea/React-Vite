
export default function Header({setActiveCategory}) {

return(
    <header className="site-header">
        <h1>Hunter x Hunter Fan Club Shop</h1>

        <nav>
            <ul className="nav">
                <li><button onClick={() => setActiveCategory("all")}>Home</button></li>
                <li><button onClick={() => setActiveCategory("men")}>Men</button></li>
                <li><button onClick={() => setActiveCategory("women")}>Women</button></li>
                <li><button onClick={() => setActiveCategory("toys")}>Toys</button></li>
                <li><button onClick={() => setActiveCategory("accessories")}>Accessories</button></li>
            </ul>
        </nav>
    </header>
);




}

   