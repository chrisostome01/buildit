/* eslint-disable @next/next/no-img-element */
import Layout from "../../layout/Layout";
import styles from "./Footer.module.css";
import Social from "../../icons/Social"
export default function Footer(){
    return(
        <div className={styles.footer}>
            <Layout>
                <div className=" flex flex-col gap-6">
                    <div className="grid grid-cols-4 text-[16px] text-[#f4f7ff] font-medium">
                        <ul className="flex flex-col gap-4  text-[#f4f7ff]">
                            <li className="font-bold text-[24px] leading-[44px]">Buildit</li>
                            <li>Development Company, 2022</li>                            
                        </ul>
                        <ul className="flex flex-col gap-2 leading-[32px]">
                            <li>Service</li>
                            <li>Service</li> 
                            <li>Service</li>
                            <li>Service</li>  
                        </ul>
                        <ul className="flex flex-col gap-2 leading-[32px]">
                            <li>About</li>
                            <li>Services</li> 
                            <li>Projects</li>
                            <li>Contacts</li> 
                        </ul>
                        <ul className="flex flex-col gap-2 leading-[32px]">
                            <li>Get in touch</li>
                            <li>60 Manor Station st. fairpot</li> 
                            <li>NY 14450</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-4 text-[16px] text-[#f4f7ff] font-medium">
                        <ul className="flex flex-col gap-2 leading-[32px] w-[210.5px]">
                            <li>
                                Site design ⏰ Alarm
                            </li>
                        </ul>
                        <ul className="flex gap-2 leading-[32px] items-center col-span-2">
                            <Social icon="./icons/instagram.svg" />
                            <Social icon="./icons/facebook.svg" />
                        </ul>
                        <ul className="flex flex-col gap-0 leading-[32px]">
                            <li>708-790-0000</li>
                            <li>sales@buildit.site</li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    )
}