import sneakersImg from '../../images/Group.png'
import Counter from '../../molecules/counter/Counter'

const Sneakers = () => {
    return (
        <>
            <img src={sneakersImg} alt="sneakers" />
            <p className="text-[#FF7E1B] font-bold text-[13px] leading-normal tracking-[2px] uppercase font-['Kumbh_Sans']">Sneaker Company</p>
            <h1 className="text-[#1D2026] font-bold text-[44px] leading-[48px] font-['Kumbh_Sans']">Fall Limited Edition Sneakers</h1>
            <p className="w-[445px] text-[#69707D] font-normal text-[16px] leading-[26px] font-['Kumbh_Sans']">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div>
                <div className='flex'>
                    <p className="text-[#1D2026] text-[28px] font-['Kumbh_Sans']">$125.00</p>
                    <p className="text-[#FF7E1B] text-[16px] font-['Kumbh_Sans'] rounded-[6px] bg-[#FFEEE2] p-2">50%</p>
                </div>
                <div className="text-[#B6BCC8] font-bold text-[16px] leading-[26px] line-through font-['Kumbh_Sans']">$250.00</div>
            </div>
            <Counter />
        </>
    )
}

export default Sneakers