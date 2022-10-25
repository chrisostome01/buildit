/* eslint-disable @next/next/no-img-element */
export default function  Social({icon}) {
    return(
        <>
            <div className="w-[40px] h-[40px] bg-[#678C92] p-[10px] rounded-[6px]">
                <img src={`${icon}`} alt="icon" />
            </div>
        </>
    )
}