import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/carted-products">Shopping Cart</Link> | <Link to="/orders">My Orders</Link>
      </nav>
    </header>
  )
}