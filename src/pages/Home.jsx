import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  const appleCan = useRef(null);
  const apple1 = useRef(null);
  const apple2 = useRef(null);
  const aboutRef = useRef(null);
  const brandAmbassadorRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        markers: false
      }
    });
    tl.to(appleCan.current, {
      top: '110%',
      left: '7%',
      duration: 1.5
    }, 'apple');

    tl.to(apple1.current, {
      top: '145%',
      left: '70%',
      scale: 0.8,
      rotate: 360,
      duration: 1.5
    }, 'apple');

    tl.to(apple2.current, {
      top: '135%',
      right: '70%',
      scale: 0.8,
      duration: 1.5
    }, 'apple');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: brandAmbassadorRef.current,
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        markers: false
      }
    });

    tl2.to(appleCan.current, {
      top: '250%',
      left: '10%',
      duration: 1.5,
      scale: 0.8,
      rotate: 90
    }, 'apple');
  });

  return (
    <div>
      <div className="home h-screen flex justify-center items-center relative">
        <h1 className='absolute md:flex hidden text-[4rem] font-bold right-[28%] z-20'>ALL <br />NEW <br />APPLY <br /> FIZZ</h1>
        <img ref={appleCan} className='md:h-[80%] h-[30%] absolute z-20' src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/5/10/866ef85b-6271-4ab1-be78-f75ae5523000_softdrinks-juiceandsoda_V1ITHRXKKA_MN.png" alt="appy-can" />
        <img ref={apple1} className='absolute z-30 md:top-[40%] top-[45%] md:left-[25%] left-[10%] md:h-[50%] h-[20%]' src="https://pngfre.com/wp-content/uploads/apple-poster.png" alt="apple1" />
        <img ref={apple2} className='absolute md:h-[50%] h-[20%] z-10 md:top-[30%] top-[43%] md:right-[20%] right-[10%]' src="https://png.pngtree.com/png-vector/20240626/ourmid/pngtree-transparent-illustration-of-apple-juice-splash-png-image_12855697.png" alt="apple2" />
      </div>
      <div ref={aboutRef} className="about h-screen flex items-center p-10">
        <div className="w-1/2 relative flex items-center mt-[25%]">
          <svg className="w-[70%] md:flex hidden rotate-[-50deg] absolute" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgb(163, 0, 0)" d="M27,-32.8C31.8,-33.6,30.4,-21.5,38.1,-9.6C45.8,2.3,62.5,14,67.2,28.8C72,43.5,64.7,61.3,51.5,66.7C38.3,72,19.2,64.8,4.9,58C-9.4,51.3,-18.7,45,-23.1,36.8C-27.4,28.6,-26.7,18.5,-26,10.8C-25.3,3.1,-24.5,-2.3,-29.2,-16.1C-33.8,-29.9,-43.9,-52.1,-39.9,-51.5C-36,-50.9,-18,-27.6,-3.5,-22.9C11.1,-18.1,22.1,-31.9,27,-32.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="md:text-5xl text-2xl font-bold">About</h1>
          <p className="md:text-lg text-sm">Appy Fizz is a sparkling apple juice drink made by Parle Agro.
            Taste: Appy Fizz is a sweet, tangy, and bubbly drink with a crisp apple flavor. It's often described as the "champagne of fruit drinks".
            History: Appy Fizz was launched in India in 2005. It's one of India's largest beverage brands.
            Uses: Appy Fizz can be enjoyed on its own or used as a base for cocktails.
          </p>
        </div>
      </div>
      <div ref={brandAmbassadorRef} className="brand-ambassador relative overflow-hidden flex justify-center items-center">
        <img className="h-full w-full object-cover" src="https://static.tnn.in/thumb/msid-112756194,thumbsize-1797780,width-1280,height-720,resizemode-75/112756194.jpg?quality=100" alt="banner" />
      </div>
    </div>
  )
}

export default Home
