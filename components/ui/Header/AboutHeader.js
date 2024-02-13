/* eslint-disable @next/next/no-img-element */
import Content from "../../content/Content";
import Layout from "../../layout/Layout";
import Nav from "../../Nav/Nav";

export default function AboutHeader() {
    return (
        <div className="bg-headGradient pb-[90px] bg-no-repeat bg-cover">
            <Layout>
                <Nav />
            </Layout>
            <Layout>
                <div className="grid grid-cols-2">
                    <div className="w-full">
                        <div className="relative w-[324px]  h-[420px]">
                            <img src="/about/house.png" alt="white house"/>
                            <img className="absolute -bottom-[15%] -right-[50%]" src="/about/library.png" alt="white house"/>
                        </div>
                    </div>
                    <div>
                        <Content
                            title={"About us"} 
                            contentTitle={"Owner and investor with a reputation"} 
                            content={`
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi,
                                quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
                                Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
                                viverra vel ultrices in, congue sed ex.
                            `}
                            disableButton={true}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    )
}