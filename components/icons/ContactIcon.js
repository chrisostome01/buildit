/* eslint-disable @next/next/no-img-element */
export default function  ContactIcon({icon}) {
    return(
        <>
            <div className={` w-[70px] h-[70px] bg-[#E1EBFA] p-[10px] rounded-[6px] shadow-normal flex items-center justify-center`}>
                <img src={`${icon}`} alt="icon" />
            </div>
        </>
    )
}

