import { AddressSuggestions } from "react-dadata"
import { Controller } from "react-hook-form"
import { ErrorText } from "../error-text/ErrorText"
import { JSX } from "react"
import styles from "./AddressInput.module.css"

export const AddressInput = ({control}:any): JSX.Element => {
    return(
        <Controller
            name="city"
            control={control}
            rules={{ required: "Выберите город" }}
            defaultValue={undefined}
            render={({ field, fieldState }) => (
                <div className={styles.inputWrapper}>
                <AddressSuggestions
                    token={process.env.NEXT_PUBLIC_DADATA_API_KEY || ""}
                    value={field.value}
                    onChange={field.onChange}
                    inputProps={{
                    placeholder: "Ваш город",
                    className: styles.input,
                    }}
                />
                {fieldState.error && <ErrorText text="Выберите город" />}
                </div>
            )}
        />
    );
}