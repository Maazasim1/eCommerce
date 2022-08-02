import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/sidebar'
import TopNav from '../components/topNav'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className=''>
        <Sidebar />
        <TopNav />
        <div className="pl-[15%] pt-[0px] w-[95vw] h-[85vh] fixed pb-20" >


          <div className='bg-white pl-20 shadow-sm h-[85vh] rounded-[60px] mr-[60px] pt-20 pb-20 overflow-auto id="second"'>
            <div className="text-7xl font-extrabold flex flex-row">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-violet pl-10 font-poppins">
                TRENDING
              </span>
              <img src="/images/announce.svg" className=' w-[150px] h-[150px] absolute right-[150px]'/>
            </div>
            <p className='font-poppins pl-12 text-lg font-bold text-violet'>Trending Right Now</p>
          <div className='p-10 pt-[107px]   grid grid-cols-4 gap-20 place-content-around'>
            <ProductCard image="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Lamborghini" price="1,000,000 NGR" rating='4/5' />
            <ProductCard image="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" title="Playstation 5" price="1,000 NGR" rating='4/5' />
            <ProductCard image="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" title="XBOX series X" price="1,000 NGR" rating='4/5'/>
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" title="Macbook Pro 2020" price="1,000 NGR" rating='4/5'/>
            <ProductCard image="https://images.unsplash.com/photo-1605134513573-384dcf99a44c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Razer Blade 2021" price="1,000 NGR" rating='4/5'/>
            <ProductCard image="https://images.unsplash.com/photo-1635775844900-706fa4015ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" title="Iphone 13" price="1,000 NGR" rating='4/5'/>
            <ProductCard image="https://images.unsplash.com/photo-1635775844900-706fa4015ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" title="Iphone 13" price="1,000 NGR" rating='4/5'/>
            <ProductCard image="https://images.unsplash.com/photo-1635775844900-706fa4015ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" title="Iphone 13" price="1,000 NGR" rating='4/5'/>

          </div>
          </div>
        </div>



      </div>
    </div>
  )
}
