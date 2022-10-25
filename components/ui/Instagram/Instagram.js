/* eslint-disable @next/next/no-img-element */
import Layout from "../../layout/Layout";

export default function Instagram() {
    return(
        <div className="bg-[#E1EBFA]">
            <Layout>
                <div className="flex flex-col gap-5 px-10">
                    <h3 className="text-center text-[16px] leading-[32px] text-[#5BCCDE]">
                        Socials
                    </h3>
                    <h1 className="text-[36px] leading-[48px] text-[#486A6F] font-bold text-center">
                        On Instagram
                    </h1>
                    <div className="grid grid-cols-3 gap-5">
                        <img src="/instagram/one.png" alt="House tree"/>
                        <img src="/instagram/two.png" alt="House tree"/>
                        <img src="/instagram/three.png" alt="House tree"/>
                        <img src="/instagram/four.png" alt="House tree"/>
                        <img src="/instagram/five.png" alt="House tree"/>
                        <img src="/instagram/six.png" alt="House tree"/>
                    </div>
                </div>
            </Layout>
        </div>
    ) 
}