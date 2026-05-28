import './App.css'

function App() {
  return (
    <div>

      {/* Navbar */}
      <div id="logo">
        <img
          id="logo-img"
          src="webmovielogo.png"
          alt="logo"
        />

        <div>Home</div>
        <div>Movies</div>
        <div>My List</div>
        <div>Continue Watching</div>
        <div id="prop">Profile</div>
      </div>

      {/* Hero Section */}
      <div id="screen-layout">
        <h1 id="text">Welcome to WebMovie</h1>

        <p id="para">
          Every movie you are looking for is available here!
        </p>
      </div>

      {/* Trending */}
      <div id="trending">
        <h2 id="movie1">MOVIE 1 - THE BOYS</h2>
        <h2 id="movie2">MOVIE 2 - BREAKING BAD</h2>
      </div>
    <h2 id="text1">UPCOMING MOVIES</h2>
      {/* Upcoming */}
      <div id="upcoming">
        

        <div id="mov3">Game of Thrones</div>
        <div id="mov4">Vinland Saga</div>
       
      </div>
      <div id="upcoming2">
       <div id="mov5">one peice</div>
        <div id="mov6">Demon Slayer</div>

    </div>

    </div>
    
  )
}

export default App