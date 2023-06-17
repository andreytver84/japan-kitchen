import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={styles['cart-items']} >
            {
                [{name: "ddds"}].map(item => <li>{item.name}</li>)
            }
        </ul>
    );

    return <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>3</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}>Закрыть</button>
                <button className={styles.button}>Заказать</button>
            </div>
        </Modal>
}

export default Cart;