import styles from "./Nav.module.css";
import Link from "next/link";
import Button from "../button/Button";


export default function Nav() {
    return (
        <div className="flex justify-between items-center py-[24px] px-[10px]">
             <Link href="./">
                <div className={styles.logo + " cursor-pointer"}>
                    <div className={styles.circle}></div>
                    <div className={styles.buildit}>
                        Buildit
                    </div>
                </div>
            </Link>
            <ul className={styles.menu}>
                <li>
                    <Link href="./about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="./service">
                        Service
                    </Link>
                </li>
                <li>
                    <Link href="./project">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="./contactus">
                        Contact
                    </Link>
                </li>
            </ul>
            <Button text={"Need a project ?"} />
        </div>
    )
}