import React ,{useState,useEffect} from 'react'
import axios from 'axios';


const SearchData = () => {
    const style = {
        backgroundImage: "url('/images/mybackground.jpeg')",
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        backgroundRepeat: 'no-repeat',  
        minHeight: '100vh',  
      };

    const MOVIE_API_URL = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await axios.get(MOVIE_API_URL);
            setMovies(response.data);
            setFilteredMovies(response.data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchMovies();
      }, []);

    useEffect(() => {
    if (searchQuery === '') {
      setFilteredMovies(movies);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.Title?.toLowerCase().includes(lowercasedQuery) || ''
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

      const handleSearchChange = (event) => {
        event.preventDefault()
        setSearchQuery(event.target.value);
      };
      
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
        
<form className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input    placeholder="Search Movies..."
        value={searchQuery}
        onChange={handleSearchChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
        <button onClick={handleSearchChange} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<div>
<div className="relative pt-2 lg:pt-2 min-h-screen">


    <div className="bg-cover w-full flex justify-center items-center"
        style={style}>
        <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                {
                    filteredMovies.map((movie)=>(
                        <article className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border relative">
      <a target="_self" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
      <div className="relative mb-4 rounded-2xl">
        <img
          className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <span className="text-xs font-semibold text-gray-700">9</span>
          <svg
            className="ml-1 w-4 h-4 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 16.14l-3.136 1.65.597-3.473L6 10.618l3.509-.511L12 7l1.491 2.107 3.509.511-2.461 2.685.597 3.473L12 16.14z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center w-full pb-4 mb-auto">
        <div className="flex items-center">
          <div className="pr-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <div className="flex flex-1">
            <div>
              <p className="text-sm font-semibold">{movie.Title}</p>
              <p className="text-sm text-gray-500">Year {movie.Year}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-sm flex items-center text-gray-500">
            {movie.Runtime}
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="font-medium text-xl leading-8">
        <a  className="block relative group-hover:text-red-700 transition-colors duration-200">
          {movie.title}
        </a>
      </h3>
      <div></div>
    </article>
                    ))
                }
  
            


                 
                </div>
               
            </div>
        </div>
    </div>
</div>

</div>

    </>
  )
}

export default SearchData