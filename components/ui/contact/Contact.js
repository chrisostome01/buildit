import Button from "../../button/Button";
import ContactIcon from "../../icons/ContactIcon";
import Layout from "../../layout/Layout";
import styles from "./Contact.module.css"

export default function Contact() {
    return(
            <Layout>
                <div className="grid grid-cols-2 py-[60px]" >
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-[#5BCCDE] text-[16px] leading-[32px] font-medium">
                                Contact
                            </p>
                            <h1 className="text-[#486A6F] font-bold text-[36px] leading-[48px]">
                                Get In Touch
                            </h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-7">
                                <ContactIcon icon={"/icons/call.svg"} />
                                <div className="self-end">
                                    <div className="text-[16px] font-medium text-[#486A6F]">Tel</div>
                                    <div className="text-[#466A6F] leading-[27px] text-[20px] font-bold">708-790-0000</div>
                                </div>
                            </div>
                            <div className="flex gap-7">
                                <ContactIcon icon={"/icons/maili.svg"} />
                                <div className="self-end">
                                    <div className="text-[16px] font-medium text-[#486A6F]">Email</div>
                                    <div className="text-[#466A6F] leading-[27px] text-[20px] font-bold">sales@buildit.site</div>
                                </div>
                            </div>
                            <div className="flex gap-7">
                                <ContactIcon icon={"/icons/maili.svg"} />
                                <div className="self-end">
                                    <div className="text-[16px] font-medium text-[#486A6F]">Office</div>
                                    <div className="text-[#466A6F] leading-[27px] text-[20px] font-bold">
                                        60 Manor Station St.
                                        <br />
                                        Fairport, NY 14450
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== start contact us form ===== */}
                    <form className="">
                        <div className={styles.contact +" bg-gradient-to-r drop-shadow-custom rounded-[5px] p-[42px] w-[475px]"} >
                            <div className="flex flex-wrap gap-8">
                                <div className="flex justify-between gap-5">
                                    <div className="w-full">
                                        <label className="text-[#678C92] leading-[19px] font-normal mb-2">
                                            Name
                                        </label>
                                        <input type="text"  className="w-full outline-none rounded-[3px] border border-[#486A6F] bg-transparent h-[40px]" />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-[#678C92] leading-[19px] font-normal mb-2">
                                            Email
                                        </label>
                                        <input type="text"  className="w-full outline-none rounded-[3px] border border-[#486A6F] bg-transparent h-[40px]" />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col">
                                    <label className="text-[#678C92] leading-[19px] font-normal mb-2">
                                        Subject
                                    </label>
                                    <input type="text" className="w-full outline-none rounded-[3px] border border-[#486A6F] bg-transparent h-[40px]"/>
                                </div>

                                <div className="w-full flex flex-col">
                                    <label className="text-[#678C92] leading-[19px] font-normal mb-2">
                                        Message
                                    </label>
                                    <textarea className="w-full outline-none rounded-[3px] border border-[#486A6F] bg-transparent h-[130px]" >

                                    </textarea>
                                </div>
                                <div className="w-full flex flex-col">
                                    <Button text={"Send message"} />
                                </div>
                            </div>    
                        </div>
                    </form>
                    {/* ====== end contact us form ====== */}
                </div>
            </Layout>
    )
}