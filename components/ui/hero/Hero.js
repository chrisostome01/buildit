import Layout from "../../layout/Layout";
import Nav from "../../Nav/Nav";

export default function Hero({ bg }) {
    return(
        <div className={`${bg} bg-cover bg-no-repeat `}>
            <Layout>
                <Nav />
                <div className="h-[75vh] flex flex-col justify-center items-center text-center">
                    <div className="w-[540px] flex flex-col gap-5">
                        <div className="text-[#5BCCDE] text-[16px] font-medium leading-[32px]">
                            Services
                        </div>
                        <div className="text-[#486A6F] text-[36px] font-bold leading-[48px]">
                            Owner and investor with a reputation
                        </div>
                        <div className="text-[#678C92] text-[16px] font-medium leading-[32px]">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Nunc elit sem, vestibulum sed 
                            leo eu, malesuada pharetra mauris.
                            Integer rhoncus, eros vel euismod
                            tempor, ipsum magna tristique nisi,
                            quis ullamcorper enim magna eu orci.
                            Sed semper ex quis semper aliquet. 
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}