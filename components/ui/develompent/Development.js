import CardIcon from "../../icons/CardIcon";
import Layout from "../../layout/Layout";
import Brands from "../brands/Brands";
import styles from "./Development.module.css";

export default function Development() {
    return(
        <div className="py-[200px]">   
            <Layout>
                    <div className="text-[#5BCCDE] text-center">
                        Statistics
                    </div>
                    <h1 className=" text-[36px] leading-[48px] font-bold text-[#486A6F] text-center">
                        Development numbers
                    </h1>
                    <div className={ `${styles.development} drop-shadow-custom rounded-[3px] grid grid-cols-3 p-[43px] mt-[100px]`}>
                        <div className="flex  gap-[40px] items-center">
                            <CardIcon icon={"/icons/location.svg"}  />  
                            <div className="self-end">
                                <h3 className="font-bold text-[36px]  leading-[48px] text-[#486A6F]">
                                    {">"}200
                                </h3>
                                <span className="text-[#678c92] tracking-[0.1rem] leading-[22px]  text-[16px] font-bold">
                                    Number
                                </span>                            
                            </div>                  
                        </div>
                        <div className="flex  gap-[40px] items-center">
                            <CardIcon icon={"/icons/hom.svg"}  />  
                            <div className="self-end">
                                <h3 className="font-bold text-[36px]  leading-[48px] text-[#486A6F]">
                                    {">"}70
                                </h3>
                                <span className="text-[#678c92] tracking-[0.1rem] leading-[22px]  text-[16px] font-bold">
                                    Number
                                </span>                            
                            </div>                  
                        </div>
                        <div className="flex  gap-[40px] items-center">
                            <CardIcon icon={"/icons/hands.svg"}  />  
                            <div className="self-end">
                                <h3 className="font-bold text-[36px]  leading-[48px] text-[#486A6F]">
                                    {">"}20
                                </h3>
                                <span className="text-[#678c92] tracking-[0.1rem] leading-[22px]  text-[16px] font-bold">
                                    Number
                                </span>                            
                            </div>                  
                        </div>
                    </div>
            </Layout>
            <Brands />
         </div>
    )
}