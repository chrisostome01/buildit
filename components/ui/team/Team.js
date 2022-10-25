/* eslint-disable @next/next/no-img-element */
import Button, { SecondaryButton } from "../../button/Button";
import Layout from "../../layout/Layout";
import Profile from "../../profile/Profile"


export default function Team() {
    const teamProfile = [ 
        "/team/team1.png", 
        "/team/team2.png",
        "/team/team3.png", 
        "/team/team4.png", 
        "/team/team5.png",
        "/team/Team6.png",
        "/team/Team7.png",
        "/team/team8.png",
        "/team/team9.png"
    ]
    return(
        <div className="bg-[#E1EBFA]">
            <Layout>
                <div className="px-[110px]">
                    <div className="text-center">
                        <p className="text-[16px] leading-[32px] font-medium text-[#5BCCDE] ">
                            Our team
                        </p>
                        <h3 className="text-[#486A6F] font-bold leading-[48px] text-[36px] mt-4">
                            Let{"'"}s meet
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-[40px] my-[32px]"> 
                        {
                            teamProfile.map((value,index) => <Profile key={index} profileImag={value} name="Name Surname" title={"Worker"} /> )
                        }                       
                    </div>
                </div>
                <div className="my-[90px]">                 
                    <div className="bg-[#678C92] h-[1.16px] w-full my-5"></div>
                        <div className="flex justify-between">
                            <span className="text-[#486A6F] font-bold text-[36px] leading-[48px]">
                                Call us
                            </span>
                            <div className="flex gap-5">
                                <Button text={"Call"} style={"px-[102px]"} />
                                <SecondaryButton text={"Email"} style={"px-[50px]"} />
                            </div>
                        </div>
                    <div className="bg-[#678C92] h-[1.16px] w-full my-5"></div>
                </div> 
            </Layout>
        </div>
    )
}