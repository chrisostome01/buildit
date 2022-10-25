import InnovationCard from "../../cards/InnovationCard";
import Layout from "../../layout/Layout";

export default function Innovation() {
    return(      
        <Layout>
            <div className="flex flex-col gap-[82px] py-[200px]">
                <h1 className=" text-[36px] leading-[48px] font-bold text-[#486A6F] text-center">
                    Innovative Execution
                </h1>
                <div className="grid grid-cols-3 ">
                    <InnovationCard icon={"/icons/pen.svg"} title="Featured Listing" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                    <InnovationCard icon={"/icons/code.svg"} title="Available Properties" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                    <InnovationCard icon={"/icons/speaker.svg"} title="In the News" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
                </div>
            </div>
        </Layout>        
    )
}