/* eslint-disable @next/next/no-img-element */
import Content from "../../content/Content";
import Layout from "../../layout/Layout";
import FeatureCard from "../../featureCard/FeatureCard"


export default function Listing({ img }) {
    return(
        <Layout>
            <div className="grid grid-cols-2 gap-[90px]">
                <img className="self-end" src={img} alt="House image" />
                <div className=" flex flex-col gap-10">
                    <Content 
                        disableButton={true} 
                        title={"Service"} 
                        contentTitle="Featured Listing" 
                        content={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. 
                            Integer rhoncus, eros vel euismod tempor, ipsum magna 
                            tristique nisi, quis ullamcorper enim magna eu orci. 
                        `}
                    />
                    <div className="flex gap-4 w-full">
                        <FeatureCard name={"Name"} statistics={"Statistics"} />
                        <FeatureCard name={"Name"} statistics={"Statistics"} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}