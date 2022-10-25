 export default function FeatureCard({ name , statistics }) {
    return(
        <div className="p-[22px] bg-[#C6DBFF] drop-shadow-custom w-[233px]">
            {
                name ? 
                    <p className="text-[#486A6F] text-[16px] font-bold leading-[22px]">
                        { name }
                    </p> 
                :
                    ""
            }
            <p className="text-[#678C92] text-[16px] font-medium leading-[32px]">
                { statistics }
            </p>
        </div>
    )
}