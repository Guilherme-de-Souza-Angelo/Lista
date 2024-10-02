function Game(props) {
    return <li>Is a { props.brand }</li>;
  }
  
  function VideoGame() {
    const jogos =[
      {id: 4, brand: 'Red Dead Redempion 2'},
      {id: 5, brand: 'God of War'},
      {id: 6, brand: 'Spider-man'},
      {id: 7, brand: 'Resident Evil'},
      {id: 8, brand: 'Ghost of Tsushima'},
    ];
    return (
      <>
        <h2>who is the best game?</h2>
        <ul>
          {jogos.map((game) => <Game key={game.id} brand={game.brand} />)}
        </ul>
      </>
    );
  }

  export default VideoGame
  