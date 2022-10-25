/* eslint-disable @next/next/no-img-element */
import Button, { SecondaryButton } from "../../button/Button";
import Layout from "../../layout/Layout";
import Nav from "../../Nav/Nav";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className="bg-main bg-no-repeat bg-cover">
            <Layout>
                <Nav />
                <div className="grid grid-cols-2 mt-[3.3rem]" >
                    <div className={` ${"flex flex-col gap-6"}`}>
                        <h1 className={`${styles.gradientText} text-[4rem] leading-[4.625rem] font-bold bg-clip-text`}>
                            Development Company
                        </h1>
                        <p className="text-[1.375rem] font-normal leading-[2.25rem] text-[#678c92]">
                            Forward-thinking real estate developer, 
                            owner and investor with a reputation
                        </p>
                        <div className="flex gap-5">
                            <Button text={"Service"} />
                            <SecondaryButton text={"About the company"} />
                        </div>
                    </div>
                    <div className="w-full flex flex-col ">
                        <div className="flex items-center max-w-full">
                            <div className="w-[160px] h-[159px] self-end p-4">
                                <img src="./header/Rectangle 613.png" alt="House" />
                            </div>
                            <div className="w-[225px] h-[225px] self-end p-4">
                                <img src="./header/Rectangle 610.png" alt="House" />
                            </div>
                            <div className="w-[128px] h-[128px] self-end p-4">
                                <img src="./header/Rectangle 612.png" alt="House" />
                            </div>
                        </div>
                        <div className="flex items-center max-w-full ">
                            <div className="w-[300px] h-[300px] self-start p-4">
                                <img src="./header/Rectangle 608.png" alt="House" />
                            </div>
                            <div className="p-4 self-start">
                                <img src="./header/Rectangle 609.png" alt="House" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
