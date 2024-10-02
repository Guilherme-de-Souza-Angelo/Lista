function Cinema(props) {
    return <li>Is a { props.brand }</li>;
  }
  
  function Films() {
    const ingresso =[
      {id: 7, brand: 'Jurrasic Park'},
      {id: 8, brand: 'Piratas do caribe'},
      {id: 9, brand: 'Star Wars'},
      {id: 10, brand: 'Avatar'},
      {id: 11, brand: 'Senhor dos Aneis'}
    ];
    return (
      <>
        <h3>who is the best film?</h3>
        <ul>
          {ingresso.map((cinema) => <Cinema key={cinema.id} brand={cinema.brand} />)}
        </ul>
      </>
    );
  }

  export default Films