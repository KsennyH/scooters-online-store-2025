'use client';

import styles from './CartLoading.module.css';
import { useCartStore } from '@/app/store/cartStore';

export const CartLoading = () => {

  const loading = useCartStore((state) => state.loading);

  if (!loading) return;

  return <div className={styles.loader} />;
};