
import mobile from '../../Img/Mobile.png';
//Icons
import LineArrow from '../../icons/LineArrow';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
const Contact = () => {
  return (
    <div className='min-xl:container mx-auto flex lg:flex-row flex-col lg:gap-10 gap-30 justify-between'>
      <section className='lg:w-sm h-[500px] w-full -translate-x-6 bg-[#728cff] rounde rounded-tr-2xl rounded-br-2xl '>
        <h1 className='text-center text-2xl mt-5 text-white'>Just Contact </h1>
        <div className='relative float-right w-full h-full'>
          <img src={mobile} alt="Phone" className='absolute top-0 right-0 transform translate-x-30 translate-y-16 object-cover max-lg:translate-x-9 max-lg:right-0' />
          <LineIllustrationOne className={`absolute -right-10 translate-x-30 top-0 translate-y-10 rotate-180 
            max-lg:translate-y-[31rem] max-lg:-translate-x-52 max-lg:rotate-0 `}/>
          <div className="absolute w-12 rounded-[5px] h-12 bg-[#aac9dd] left-24 top-10 max-lg:left-2"></div>
          <div className="absolute w-12 rounded-[5px] h-12 border-white border-8 left-28 top-15 max-lg:left-6"></div>
        </div>
      </section>
      <aside className='md:w-sm w-full relative bg-[#e4eff5] rounded-2xl py-5 max-lg:mx-auto shadow-2xl'>
        <LineArrow className={'absolute bottom-0 size-20 rotate-90 -translate-x-20 -translate-y-10 max-lg:rotate-[250deg] max-lg:size-15 max-lg:-translate-x-4 max-lg:top-10 max-lg:right-0 '}/>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">FULL NAME</label>
            <input 
              type="text" 
              className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728cff]"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-1">ENTER YOUR EMAIL</label>
            <input 
              type="email" 
              className="w-full p-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728cff]"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-1">ENTER THE PROBLEM OR QUERY</label>
            <textarea 
              rows={3}
              className="w-full border-blue-400 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728cff]"
            />
          </div>
          
          <button className="w-full bg-[#728cff] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#5a75e0] transition-colors">
           
            <span>Send Now</span>
          </button>
        </div>
      </div>
      </aside>
    </div>
  )
}

export default Contact