import CardIcon from "../icons/CardIcon";

export default function InnovationCard({icon , title , content}) {
    return(
        <div className="flex flex-col gap-2  px-9">
            <CardIcon icon={icon}/>
            <div className="text-[#486A6F] leading-[44px] text-[24px] font-bold">
                {title}
            </div>
            <div className="text-[16px] leading-[32px] font-medium text-[#678C92]">
                {content}
            </div>
        </div>
    )
}