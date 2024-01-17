import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/dashboard.css'
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';

const Dashboard = () => {
    // const Dashboard = ({ setSignInOpen }) => {
    const [mostPopular, setMostPopular] = useState([]);
    const [user, setUser] = useState();
    const [comedy, setComedy] = useState([]);
    const [news, setNews] = useState([]);
    const [sports, setsports] = useState([]);
    const [crime, setCrime] = useState([]);
    const [loading, setLoading] = useState(false);

    //user
    const { currentUser } = useSelector(state => state.user);

    //   const token = localStorage.getItem("podstreamtoken");
    //   const getUser = async () => {
    //     await getUsers(token).then((res) => {
    //       setUser(res.data)
    //     }).then((error) => {
    //       console.log(error)
    //     });
    //   }

    //   const getPopularPodcast = async () => {
    //     await getMostPopularPodcast()
    //       .then((res) => {
    //         setMostPopular(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       });
    //   }

    //   const getCommedyPodcasts = async () => {
    //     getPodcastByCategory("comedy")
    //       .then((res) => {
    //         setComedy(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((error) => console.log(error));
    //   }

    //   const getNewsPodcasts = async () => {
    //     getPodcastByCategory("news")
    //       .then((res) => {
    //         setNews(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((error) => console.log(error));
    //   }

    //   const getSportsPodcasts = async () => {
    //     getPodcastByCategory("sports")
    //       .then((res) => {
    //         setsports(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((error) => console.log(error));
    //   }

    //   const getCrimePodcasts = async () => {
    //     getPodcastByCategory("crime")
    //       .then((res) => {
    //         setCrime(res.data)
    //         console.log(res.data)
    //       })
    //       .catch((error) => console.log(error));
    //   }

    //   const getallData = async () => {
    //     setLoading(true);
    //     if (currentUser) {
    //       setLoading(true);
    //       await getUser();
    //     }
    //     await getPopularPodcast();
    //     await getCommedyPodcasts();
    //     await getNewsPodcasts();
    //     await getCommedyPodcasts();
    //     await getCrimePodcasts();
    //     await getSportsPodcasts();
    //     setLoading(false);
    //   }

    //   useEffect(() => {
    //     getallData();
    //   }, [currentUser])

    return (
        <div className='DashboardMain'>
            {loading ?
                <div className='Loader'>
                    <CircularProgress />
                </div>
                :
                <>
                    {currentUser && user?.podcasts?.length > 0 &&
                        <div className='FilterContainer' box={true}>
                            <div className='Topic'>Your Uploads
                                <Link to={`/profile`} style={{ textDecoration: "none" }}>
                                    <div className='Span'>Show All</div>
                                </Link>
                            </div>
                            <div className='Podcasts'>
                                {/* {user?.podcasts.slice(0, 10).map((podcast) => (
                                    <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                                ))} */}
                            </div>
                        </div>
                    }
                    <div className='FilterContainer'>
                        <Link to={`/showpodcasts/mostpopular`} style={{ textDecoration: "none" }}>
                            <div className='Topic'>Most Popular
                                <div className='Span'>Show All</div>
                            </div>
                        </Link>
                        <div className='Podcasts'>
                            {/* {mostPopular.slice(0, 10).map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                            ))} */}
                        </div>
                    </div>
                    <div className='FilterContainer'>
                        <Link to={`/showpodcasts/comedy`} style={{ textDecoration: "none" }}>
                            <div className='Topic'>Comedy
                                <div className='Span'>Show All</div>
                            </div>
                        </Link>
                        <div className='Podcasts'>
                            {/* {comedy.slice(0, 10).map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                            ))} */}
                        </div>
                    </div>
                    <div className='FilterContainer'>
                        <Link to={`/showpodcasts/news`} style={{ textDecoration: "none" }}>
                            <div className='Topic'>News
                                <div className='Span'>Show All</div>
                            </div>
                        </Link>
                        <div className='Podcasts'>
                            {/* {news.slice(0, 10).map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                            ))} */}
                        </div>
                    </div>
                    <div className='FilterContainer'>
                        <Link to={`/showpodcasts/crime`} style={{ textDecoration: "none" }}>
                            <div className='Topic'>Crime
                                <div className='Span'>Show All</div>
                            </div>
                        </Link>
                        <div className='Podcasts'>
                            {/* {crime.slice(0, 10).map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                            ))} */}
                        </div>
                    </div>
                    <div className='FilterContainer'>
                        <Link to={`/showpodcasts/sports`} style={{ textDecoration: "none" }}>
                            <div className='Topic'>Sports
                                <div className='Span'>Show All</div>
                            </div>
                        </Link>
                        <div className='Podcasts'>
                            {/* {sports.slice(0, 10).map((podcast) => (
                                <PodcastCard podcast={podcast} user={user} setSignInOpen={setSignInOpen} />
                            ))} */}
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

export default Dashboard