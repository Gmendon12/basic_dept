import './Navbar.css'
import { useEffect, useState, useRef } from 'react'
import More from './More'
import MoreData from '../../MoreData.json'

export default function Navbar() {

const[open, setOpen] = useState(false)
const handleMouseEnter = () => setOpen(true)
const handleMouseLeave = () => setOpen(false)
const handleClick = () => setOpen(!open)
const[showSearch, setShowSearch] = useState(false)
const searchBoxRef = useRef(null)
const[showMenu, setShowMenu] = useState(false)
const[isScrolled, setIsScrolled] = useState(false)


const toggleSearch = () => setShowSearch(!showSearch)
const toggleMenu = () => setShowMenu(!showMenu)

const handleClickOut = (e) =>{
  if(searchBoxRef.current && !searchBoxRef.current.contains(e.target))
    setShowSearch(false)
}

useEffect(() =>{
  if(showSearch) {
    document.addEventListener('mousedown', handleClickOut)
  }
  return ()=>{
    document.removeEventListener('mousedown', handleClickOut)
  }
}, [showSearch])

useEffect(()=>{
  const onScroll = () =>{
    setIsScrolled(window.scrollY > window.innerHeight - 10)
  };

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll)
},[])

  return (
    <>
       <div id='navbar-container' className={isScrolled ? 'scrolled' : ''}>
        <div className='nav-logo'>BASIC/DEPT</div>
        <div className='nav-items'>
          
          <div className='header-links'>
            <span className='header-text'>WORK</span>
            <span className='header-underline'></span>
          </div>

          <div className='header-links'>
            <span className='header-text'>NEWS</span>
            <div className='header-underline'></div>
          </div>

          <div className='header-links'>
            <span className='header-text'>THINKING</span>
            <div className='header-underline'></div>
          </div>

          <div className='discover'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            >DISCOVER
                <div className={`dropdown ${open ? 'show' : 'notshow'}`}>
                <div>About</div>
                <div>Home</div>
                <div>Know More</div>
                </div>
            </div>

            <div onClick={toggleSearch} className='search-link'>SEARCH
            </div>

            <div className='header-links'>
            <span className='header-text'>CAREERS</span>
            <div className='header-underline'></div>
          </div>
    
          <div className='header-links'>
            <span className='header-text'>CONTACT</span>
            <div className='header-underline'></div>
          </div>
        </div>
        <div style={{width:'30px'}}>
        {
          showMenu ? (
            <span class="material-symbols-outlined"  onClick={toggleMenu}>cancel</span>
          ) : (
            <div className='menu' onClick={toggleMenu}>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          )
        }
        </div>   
    </div>

    {
             showSearch && (
              <div className={`search-overlay ${showSearch ? 'active' : ''}`}>
              <div className='search-box' ref={searchBoxRef}>
              <input type='text' placeholder='search...' />
              <button className='search-btn'>Search</button>
              <button className='close-btn' onClick={()=> setShowSearch(false)}>Close</button>
              </div>
              </div>
               )
          }

{
            showMenu && (
              <div className='menu-page'>
                <span className='close-menu' onClick={toggleMenu}>X</span>
                <div className='more-items'>
                  {
                    MoreData.map((item) =>{
                      return(
                        <More 
                        number={item.number}
                        img={item.img}
                        title = {item.title}
                        year = {item.year}
                        main = {item.main}
                        para= {item.para}
                        link = {item.link}
                        />
                      )
                    })
                  }
                </div>
              </div>  
            )
          }
  
    </>
 
    
  )
}
