import { useEffect, useState } from 'react';
import CoffeeShopFinder from './CoffeeShopFinder';
import coffeeImage from './Frame 1 (5).png'

function App() {
  const [coffeePouring, setCoffeePouring] = useState(false)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  function scrollDownSmooth(lastY) {
    window.scroll(0, window.scrollY + 1)
    let scrollYamount = window.scrollY
    const myTimeout = setTimeout(() => {scrollDownSmooth(window.scrollY)}, 4)
    if(scrollYamount === lastY) {
      clearTimeout(myTimeout)
    }
    
  }
  
  useEffect(() => {
    if(!coffeePouring) {
      return
    }
    scrollDownSmooth()
  },[coffeePouring])
  return (
    <div className="flex flex-col relative items-center py-4">
      <div className="flex py-12">
      <svg width="250" height="58" viewBox="0 0 354 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="title" d="M24.6788 20.9297C24.4454 24.2857 23.9397 32.6752 18.496 33.7178C14.1221 34.5554 7.2938 35.8781 3.94843 32.4745C-1.9713 26.4516 7.03489 11.4817 11.8769 6.60225C14.157 4.30453 15.9899 0.815532 20.0963 2.39875C25.4326 4.45615 27.7297 15.5209 29.1158 19.6864C33.4696 32.7708 39.3678 44.9192 25.4789 55.3865C22.832 57.3813 19.3743 59.6763 16.8231 56.2154C11.198 48.5846 16.3295 40.6051 23.0785 35.0203C28.7723 30.3087 33.8235 31.541 41.1176 30.4615C50.4264 29.0839 60.6421 22.6919 57.5564 14.1804C53.8189 3.87111 34.4129 19.4726 40.9721 27.3237C44.4943 31.5397 50.2351 27.2973 52.7557 24.6595C55.8132 21.4598 54.9119 19.7505 61.0478 19.864C67.2865 19.9794 73.2448 21.0487 79.596 20.8705C83.9988 20.7469 88.6553 20.8068 89.8521 16.667C90.3144 15.0675 90.7847 12.3769 87.8881 12.5819C81.714 13.0189 78.7973 15.7723 77.7776 20.3968C76.3392 26.9196 86.4373 27.3717 92.4706 29.4551C100.072 32.0798 113.818 32.6102 118.365 25.3108C121.155 20.833 123.746 5.84576 123.603 10.8649C123.452 16.1225 115.675 30.8549 118.22 26.0212C120.688 21.3344 128.151 15.1057 134.44 14.1212C141.761 12.9753 138.383 26.2034 144.042 27.975C148.265 29.297 157.636 25.651 160.044 22.8834C164.291 18.004 164.69 12.4483 161.499 7.25349C158.659 2.62971 156.39 7.36002 155.025 9.91768C151.72 16.1143 151.112 21.771 158.226 26.4949C162.763 29.5078 168.129 29.6519 173.792 29.3959C181.137 29.0637 182.868 26.1754 187.539 22.173C189.17 20.7757 193.451 10.401 189.358 10.2729C179.071 9.95088 175.625 16.7797 174.81 25.074C174.39 29.344 180.035 28.3894 183.611 28.3894C186.995 28.3894 187.239 26.2362 188.412 24.0083C190.223 20.5686 191.676 17.0818 193.286 13.5883C194.791 10.3217 196.345 20.1098 198.086 23.2978C202.774 31.8836 212.738 20.7562 213.143 15.4829C213.635 9.07757 212.446 9.13919 219.835 7.01668C223.625 5.92803 233.852 1.25649 231.182 3.70124C222.361 11.7788 222.266 35.0514 241.729 28.1526C247.816 25.9952 250.373 20.1466 251.04 15.1277C251.399 12.4198 251.185 4.23379 251.185 6.95747C251.185 14.4675 249.612 27.5278 260.059 14.7724C260.52 14.2093 264.79 7.49403 266.606 8.49678C269.479 10.0836 268.913 17.6573 268.933 19.864C268.942 20.8316 266.319 34.7183 272.57 29.4551C279.207 23.8666 275.818 9.37487 285.299 5.24055C292.663 2.02975 294.335 21.3117 295.919 23.8899C302.866 35.1992 324.227 13.7787 321.014 6.30622C319.559 2.92427 312.24 8.85334 311.121 10.1545C304.684 17.6392 310.366 28.7791 321.305 30.2839C327.063 31.0762 333.186 27.7995 337.743 25.3108C341.76 23.1172 346.852 17.7326 352 17.7326" stroke="white" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <svg width="61" height="40" viewBox="0 0 61 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="heart" d="M33 58C18.4148 55.2141 3.25156 40.5348 2.22223 24.8889C1.69226 16.8334 12.9616 7.64808 20.5 8.05556C25.735 8.33853 29.2447 11.6005 31.5 16.1111C34.6325 22.3761 31.8483 12.7178 34.8889 9.55556C38.4416 5.86075 41.5791 0.81845 47.2222 2.44444C56.7288 5.18361 57.6973 15.4607 58.4444 24C59.3334 34.1599 58.2741 38.5607 52.4444 46.7222C48.7905 51.8378 45.2118 57.647 42 63" stroke="#FF0000" stroke-width="4" stroke-linecap="round"/>
      </svg>
      </div>
      <div className='relative'>
      <button onClick={() => setCoffeePouring(true) }>
      <img id='cup' className={coffeePouring ? '-rotate-45 transition-all relative z-20' : 'opacity-0'} src={coffeeImage} alt='cup of coffee'></img>
      </button>
      {coffeePouring ? 
      <svg className='absolute top-[9.1rem] -left-[2.2rem] -scale-x-100 z-0' width="116" height="678" viewBox="0 0 116 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='coffee' d="M86.6808 11C94.7978 31.4175 103.276 49.5778 105.074 72.0015C108.401 113.502 102.81 156.544 87.5619 195.238C70.0514 239.673 44.2297 279.895 28.8591 325.315C11.8922 375.451 7.57152 427.877 11.1821 480.622C13.4825 514.226 19.8859 548.903 34.0906 579.581C41.5613 595.716 52.3342 610.792 58.651 627.407C63.2326 639.457 67.8475 654.966 67.8475 668" stroke="#772B00" stroke-width="20" stroke-linecap="round"/>
      </svg>
       : null}
      </div>
      <div id='blockingbox' className='w-full absolute -bottom-[50rem] z-20'></div>
      {error}
      {coffeePouring ? <div id='coffeedata' className='flex flex-col w-full md:w-[40rem] bg-red-500 rounded-lg absolute -bottom-[50rem] opacity-0 z-20'>
        <CoffeeShopFinder latitude={latitude} longitude={longitude}/>
      </div> : null}
      </div>
  );
}

export default App;
