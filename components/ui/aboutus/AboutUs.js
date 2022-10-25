import Button from "../../button/Button";
import Content from "../../content/Content";
import Layout from "../../layout/Layout";
import Brands from "../brands/Brands";

/* eslint-disable @next/next/no-img-element */
export default function AboutUs() {
    return (
        <div className="bg-[#E1EBFA]">
            {/* ======== Start: brand cards ======= */}
                <Brands />
            {/* ========== End: brand cards ======= */}
            <Layout>
                <div className="grid grid-cols-2 content-center gap-5 px-10">
                    <div className="px-4 py-6">
                        <img className="w-[500px] h-[375px]" src="/about/about.png" alt="About image" />    
                    </div>    
                    <Content 
                        title={"About us"} 
                        contentTitle={" Owner and investor with a reputation"}
                        content={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, 
                            vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus,
                            eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper
                            enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit 
                            molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                            congue sed ex.
                        `}
                    />
                </div>
            </Layout>
        </div>
    )
}