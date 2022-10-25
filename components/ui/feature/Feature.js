/* eslint-disable @next/next/no-img-element */
import Content from "../../content/Content";
import Layout from "../../layout/Layout";

export default function Feature() {
    return (
        <Layout>
            <div className="px-10">
                <div className="grid grid-cols-2 items-center gap-5">
                    <div className="py-[30px]">
                        <Content 
                            title={"Available Properties"} 
                            contentTitle={"Featured Listing"}
                            content={`
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc elit sem, vestibulum sed leo eu, malesuada pharetra 
                                mauris. Integer rhoncus, eros vel euismod tempor, ipsum 
                                magna tristique nisi, quis ullamcorper enim magna eu orci.
                                Sed semper ex quis semper aliquet. Cras hendrerit molestie 
                                sapien sed fermentum. Mauris dui tortor, viverra vel ultrices 
                                in, congue sed ex.
                            `}
                        />
                    </div>
                    <div className="flex gap-[30px] h-[591px]">
                        {/* ====== start: column one ====== */}
                            <div className="flex flex-col gap-[30px] self-end"> 
                                <div className="pt-[30px]">
                                    <img className="" src="/feature/Photoone.png" alt="construction" />
                                </div> 
                                <div  className="pl-[30px]">
                                    <img  src="/feature/Photothree.png" alt="house green" />                          
                                </div>
                            </div>
                        {/* ======= end: column one ======= */}

                        {/* ====== start: column two ====== */}
                            <div className="flex flex-col gap-[30px]">
                                <div>
                                    <img src="/feature/Phototwo.png" alt="sky" />
                                </div>
                                <img src="/feature/Photofour.png" alt="houe sky" />
                            </div>
                        {/* ======= end: column two ======= */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}