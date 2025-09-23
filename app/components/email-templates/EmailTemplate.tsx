import React from "react";

export const EmailTemplate = ({ fullname }: { fullname: string }) => {
  return (
    <div>
      <h1>{fullname}!</h1>
      <div>Ваш заказ успешно создан. Вы можете оплатить его по ссылке</div>
    </div>
  );
}