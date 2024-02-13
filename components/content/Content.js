import Button from "../button/Button";

export default function Content({ title, contentTitle, content, disableButton }) {
    const showButton = !disableButton ? true :  false;
    return(
        <div className="inline flex-col space-y-6">
            <p className="font-medium text-[16px] leading-[32px] text-[#5BCCDE]">
                { title }
            </p>
            <div className="font-bold text-[36px] leading-[48px] text-[#486A6F]">
                { contentTitle } 
            </div>
            <div className="font-medium text-[16px] leading-[32px] text-[#678C92]">
               { content }
            </div>
            { showButton ? <Button text={"Exprole"} style="px-[71px]" />  : <></>}
        </div> 
    )
}