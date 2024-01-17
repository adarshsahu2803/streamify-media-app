import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './css/app.css'
import Dashboard from '../src/pages/Dashboard.js'
import DisplayPodcasts from './pages/DisplayPodcasts.js'
import Favourites from './pages/Favourites.js'
import PodcastDetails from './pages/PodcastDetails.js'
import Profile from './pages/Profile'
import Search from './pages/Search.js'

function App() {

  // const [darkMode, setDarkMode] = useState(true);
  // const { open, message, severity } = useSelector((state) => state.snackbar);
  // const {openplayer,type, episode, podid, currenttime,index} = useSelector((state) => state.audioplayer);
  // const {opensi} =  useSelector((state) => state.signin);
  // const [SignUpOpen, setSignUpOpen] = useState(false);
  // const [SignInOpen, setSignInOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(true);
  // const [uploadOpen, setUploadOpen] = useState(false);


  // const { currentUser } = useSelector(state => state.user);
  // const dispatch = useDispatch()
  //   //set the menuOpen state to false if the screen size is less than 768px
  //   useEffect(() => {
  //     const resize = () => {
  //       if (window.innerWidth < 1110) {
  //         setMenuOpen(false);
  //       } else {
  //         setMenuOpen(true);
  //       }
  //     }
  //     resize();
  //     window.addEventListener("resize", resize);
  //     return () => window.removeEventListener("resize", resize);
  //   }, []);

  //   useEffect(()=>{
  //     dispatch(
  //       closeSignin()
  //     )
  //   },[])

  return (

    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

    <BrowserRouter>
      {/* {opensi && <Signin setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />} */}
      {/* {SignUpOpen && <Signup setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />} */}
      {/* {uploadOpen && <Upload setUploadOpen={setUploadOpen} />} */}
      {/* {openplayer && type === 'video' && <VideoPlayer episode={episode} podid={podid} currenttime={currenttime} index={index}/>} */}
      {/* {openplayer && type === 'audio'  && <AudioPlayer episode={episode} podid={podid} currenttime={currenttime} index={index}/>} */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/podcast/:id' element={<PodcastDetails />} />
        <Route path='/showpodcasts/:type' element={<DisplayPodcasts />} />
      </Routes>


    </BrowserRouter>

    // </ThemeProvider>

  );
}

export default App;