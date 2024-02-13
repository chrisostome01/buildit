/* eslint-disable @next/next/no-img-element */
import Layout from "../../layout/Layout";

export default function Brands() {
    return(
       <Layout>
            <div className="bg-[#678C92] h-[1.16px] w-full my-5"></div>
                <div className="flex justify-center gap-[40px]">
                    <img src="/brands/N.svg" alt="N logo icon " />
                    <img src="/brands/zig.svg" alt="N logo icon " />
                    <img src="/brands/ipsum.svg" alt="N logo icon " />
                    <img src="/brands/top.svg" alt="N logo icon " />
                    <img src="/brands/logoip.svg" alt="N logo icon " />
                </div>
            <div className="bg-[#678C92] h-[1.16px] w-full my-5"></div>       
       </Layout>
    )
}