import { JSX } from "react";
import Image from "next/image";
import { Reviews } from "../reviews/Reviews";
import { Title } from "../title/Title";
import Counter from "../counter/Counter";
import { CartItemProps } from "./CartItem.props";
import { Button } from "../button/Button";
import styles from "./CartItem.module.css";
import { useCartStore } from "@/app/store/cartStore";

export const CartItem = ({ product }: CartItemProps): JSX.Element => {

    const item = useCartStore(state => state.items.find((el) => el.product.id === product.id));
    const quantity = item ? item.quantity : 0;

    const originPrice = product.price * quantity;
    const discountPrice = originPrice - (originPrice * product.discount / 100);
    const totalProductPrice = product.discount ? discountPrice : originPrice;
    const { removeProduct } = useCartStore();

    return(
        <article className="row align-center relative">
            <Button view="secondary" type="button" className={styles.close} onClick={() => removeProduct(product.id)}>X</Button>
            <div className="col-3">
                <div className="container">
                    <Image src={product.imageUrl} alt={product.name} width={100} height={100}/>
                </div>
            </div>
            <div className="col-6">
                <div className="container">
                    <Title level="h4" className="mb4">{product.name}</Title>
                    <Reviews />
                </div>
            </div>
            <div className="col-3">
                <div className="container">
                    <div className={`mb4 ${product.discount ? 'oldPrice' : ''}`}><strong>{originPrice} руб.</strong></div>
                    {product.discount > 0 && <div className="mb4"><strong>{discountPrice} руб.</strong></div>}
                    <Counter productId={product.id} />
                </div>
            </div>
        </article>
    );
}