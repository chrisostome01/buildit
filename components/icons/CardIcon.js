/* eslint-disable @next/next/no-img-element */
import styles from "./CardIcon.module.css";
export default function  CardIcon({icon}) {
    return(
        <>
            <div className={` ${styles.icon} w-[70px] h-[70px] bg-[#678C92] p-[10px] rounded-[6px] shadow-normal flex items-center justify-center`}>
                <img src={`${icon}`} alt="icon" />
            </div>
        </>
    )
}