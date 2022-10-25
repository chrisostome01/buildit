import styles from "./Button.module.css";

export default function Button({ text , style }) {
    return (
        <>
            <button className={`rounded-[5px] border-none text-white py-[10px] px-[25px] ${styles.button} ${style}`}>
                {text}
            </button>
        </>
    )
}


export  function SecondaryButton({ text, style }) {
    return (
        <>
            <button className={`bg-[#C6DBFF] text-[#486A6F] rounded-[5px] py-[10px] px-[25px]  border-none  ${style}`}>
                {text}
            </button>
        </>
    )
}

