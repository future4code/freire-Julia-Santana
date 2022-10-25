import { homeStyle } from "../Global/homeStyle.css"
import logo from "../Pages/logo.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import { ImageListItem, ImageList, ImageListItemBar, Pagination } from "@mui/material";
import {useNavigate} from "react-router-dom"


const LIMIT = 12;
export const Home = () => {

  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [pagina, totalPaginas] = useState()
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500"

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3942a0ec5d3694e125cb28a034dd1b0a&language=en-US&page=1`)
      .then((response) => {

        setMovies(response.data.results)
      }).catch((error) => {
        setMovies(error.message)
      });
  }
  
 
  const handleChange = (event, value ) => {
    setPage(value);
  };
//   const paginatioFeed = (value) => {
// console.log(page);
//     navigate(`https://api.themoviedb.org/3/movie/popular?api_key=3942a0ec5d3694e125cb28a034dd1b0a&language=en-US&page=${page}`)
//     setPage(value)

//   }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="divHome">
      <header className="headerHome">
        <img className="imagemLogo" src={logo} />
      </header>
      <div className="divText">
        <h3 className="subtitulo">
          Milhões de filmes,
          séries e pessoas para descobrir.
          Explore já.
        </h3>

        <div className="filtro">
          <p className="textoFiltro">
            filtre por :
          </p>
          <div className="botão">

            <button className="button">Ação</button>
            <button className="button">Aventura</button>
            <button className="button">Animação</button>
            <button className="button">Comédia</button>
            <button className="button">Crime</button>
            <button className="button">Documentário</button>
            <button className="button">Drama</button>
            <button className="button">Família</button>
            <button className="button">Fantasia</button>
            <button className="button">História</button>
            <button className="button">Terror</button>
            <button className="button">Música</button>
            <button className="button">Mistério</button>
            <button className="button">Romance</button>
            <button className="button">Ficcção Cientifica</button>
            <button className="button">Cinema TV</button>
            <button className="button">Thriller</button>
            <button className="button">Guerra</button>
            <button className="button">Faroeste</button>
          </div>
        </div>
      </div>
      <ImageList sx={{ width: 960, height: 350 }} cols={4} gap={15}>

        {movies.map((item) => (

          <>
            <ImageListItem className="feedImagem" key={item.img} >
              <img className="feedMovie" src={`${image_path}${item.poster_path}`} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.release_date}</span>}


              />
            </ImageListItem>

          </>


        ))}
        {/* <img className="feedMovie" src={`${image_path}${movies?.[0]?.poster_path}`}/>  */}
      </ImageList>
      <Pagination className="pagination" count={10} variant="outlined" shape="rounded" page={page} onChange={handleChange}
       
       
        
      />
    console.log(Pagination);
      

    </div>
  )
}