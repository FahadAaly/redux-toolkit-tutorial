import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./containers/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  const { isOpen } = useSelector((state) => state.modal);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
