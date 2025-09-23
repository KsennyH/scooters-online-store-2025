'use client';
import { JSX, useEffect } from "react";
import { Title } from "../title/Title";
import styles from "./CheckoutForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCartStore } from "@/app/store/cartStore";
import { CartItemList } from "../cart-item-list/CartItemList";
import { CheckoutSidebar } from "../checkout-sidebar/CheckoutSidebar";
import { Input } from "../input/Input";
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { ErrorText } from "../error-text/ErrorText";
import { AddressInput } from "../address-input/AddressInput";
import { makeOrder } from "@/actions";
import toast from "react-hot-toast";

export type InputsData = {
  firstName: string,
  email: string,
  lastName: string,
  phone: string,
  city: DaDataSuggestion<DaDataAddress> | undefined,
  comment: string
}

export const CheckoutForm = (): JSX.Element => {
    const {items, totalAmount, loading, fetchCart} = useCartStore();

    // eslint-disable-next-line react-hooks/exhaustive-deps        
    useEffect(() => {
        fetchCart()
    }, []);
    
    const { control, reset, handleSubmit, register,  formState: { errors }, } = useForm<InputsData>({
        mode: "onBlur"
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit: SubmitHandler<InputsData> = async (data) => {
        try {
            const url = await makeOrder(data);
            toast.success("Заказ успешно оформлен");
            reset();
            if (url) {
                location.href = url;
            }
        } catch(error: any) {
            console.error('Ошибка при создании заказа:', error);
            toast.error("Ошибка при создании заказа");
            throw error; 
        }
        
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-8">
                    <div className="container">
                        <CartItemList items = {items} />
                        <div className="mb10">
                            <Title level="h3" className="mb4">Контактные данные получателя</Title>
                            <div className={styles.inputs}>
                                <Input {...register('firstName', { required: true, maxLength: 40 })} type="text" placeholder="Имя*" error={errors.firstName && "Это поле обязательно для заполнения"}/>
                                <Input {...register('email', {
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Введите корректный email",
                                        },
                                    })} type="email" placeholder="Email" error={errors.email && (errors.email.message || 'Это поле обязательно для заполнения')}
                                />
                                <Input {...register('lastName', { required: true, maxLength: 40 })} type="text" placeholder="Фамилия*" error={errors.lastName && "Это поле обязательно для заполнения"}/>
                                <Input {...register('phone', {
                                        required: true,
                                        pattern: {
                                            value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                            message: "Введите корректный номер телефона",
                                        } 
                                    })} type="text" placeholder="Номер телефона*" error={errors.phone && (errors.phone.message || 'Это поле обязательно для заполнения')}/>
                            </div>
                        </div>
                        <div className="mb10">
                            <Title level="h3" className="mb4">Ваш адрес</Title>
                            <AddressInput control={control}/>
                        </div>
                        <div className="mb10">
                            <Title level="h3" className="mb4">Комментарий к заказу</Title>
                            <div className={styles.inputWrapper}>
                                <textarea {...register('comment')} id="comment" placeholder="Комментарий" className={`${styles.input} ${styles.textarea}`} rows={5}></textarea>
                                {errors.comment && <ErrorText text="Добавьте корректный комментарий" />}
                            </div>  
                        </div>          
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <CheckoutSidebar items={items} totalAmount={totalAmount} loading={loading} />
                    </div>
                </div>
            </div>
        </form>
    );
}