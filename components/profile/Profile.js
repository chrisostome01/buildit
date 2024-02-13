/* eslint-disable @next/next/no-img-element */
export default function Profile({ profileImag, name, title }) {
    return (
        <div className="flex flex-col rounded-[5px]">                           
            <img src={profileImag} alt="team profile"  />
            <div className="bg-contentBg p-[20px] bg-no-repeat rounded-b-[5px]">
                <div className="text-[#486A6F] font-bold leading-[22px] text-[16px]">
                    {
                        name
                    }
                </div>
                <div className="text-[#678C92] text-[16px] font-medium leadning-[32px]">
                    {
                        title
                    }
                </div>
            </div>                           
        </div>
    )
}