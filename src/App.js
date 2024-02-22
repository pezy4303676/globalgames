import { useEffect, useState, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import fortnite from './images/Fornite-PS5-Xbox-Series-X-ameliorations-removebg-preview 1.png'
import fortnitelogo from './images/12br-delay-social-news-header-02-1920x1080-119208936-removebg-preview 1-fotor-202402137947.png'
import gta from './images/capsule_616x353 1.png'
import seta from './images/Framerightset.png'

function App() {
const [data, setData] = useState([]);
const carrousel = useRef(null);

  useEffect(() =>{
fetch('http://localhost:3000/static/shoes.json').then((response)=> response.json()).then(setData)
  }, [])


  const handleLeftClick = (e) => {
e.preventDefault();

carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  }

  
  const handleRightClick = (e) => {
  e.preventDefault();

carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  }


  if (!data || !data.length) return null;
  return (
    <div className="App">
      <header className="App-header">
     <div className='bg-[#1C1E2A] w-[100%]  h-[1444px]'>
      <Sidebar/>
      
      <div className='bg-[#1C1E2A] w-[100%] h-[75px] z-[5] fixed shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>gfsfsdfsdfsdfsdf</div>
     </div>
     <div id='page' className='bg-[transparent] h-[560px] w-[1070px] z-[5] fixed bottom-[0] right-0 p-[20px]'>
     <div id='bganu'>
        <div  className='absolute left-[60px] top-[55px]'>
            <img src={fortnitelogo} className='absolute'/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 id='u' className='text-[white] relative left-[8px]'>
            Fortnite é um jogo de batalha real gratuito em que 100 <br />
            jogadores lutam até o último homem ou equipe de pé<br />
            Os jogadores podem construir estruturas para se<br />
            protegerem ou para atacar seus oponentes
            </h3>
            <br />
            <br />
            <br />
<button id='btn' className='bg-[white] w-[76px] h-[38px] '>Get</button>
        </div>
     <img className='relative left-[36%] top-[18%] w-[643.06px] h-[340.23px]' src={fortnite} />
     </div>
     <br />
     <div className='buttons'>
      <button onClick={handleLeftClick}><img src={seta}/></button>
      <button onClick={handleRightClick}><img src={seta} /></button>

     </div>
     <div className='carrousel' ref={carrousel}>  

      {data.map((item) =>{
        const {id, name, subname, image} = item;
    return( 
      
      <div className='item' key={id}>
<div className='image'>
<img src={image} alt='gameimg' />
</div>
<div className='info'>
  <span className='name'>{name}</span>
  <span className='subname'>{subname}</span>
</div>
<button className='btn'>Get</button>
      </div> 
      );
      })}
     </div>
    </div>
 
      </header>
    </div>
  );
}

export default App;
