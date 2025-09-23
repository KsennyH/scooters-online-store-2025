import { JSX } from "react";
import Image from "next/image";
import styles from "./EmptyCart.module.css";

export const EmptyCart = ():JSX.Element => {
    return(
        <div className={styles.emptyCart}>
            <div>
                <Image alt="Cart" src={'/uploads/icons/cart.png'} width={250} height={250}/>
            </div>   
        </div>
    );
}