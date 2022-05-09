const List = ({results, showResults, isSearching}) => {
    return(
        <>
        {showResults ? <h2 className="mt-5 text-2xl font-bold">Resultados de su búsqueda.</h2>: null}
        <div>
            <ul>
                {!results.length && isSearching && <p  className="bg-rose-400 w-1/2 p-3">No se encontraron personas en su búsqueda.</p>}
                {results?.map((result, index) => <li key={result?.id} 
                className="bg-indigo-100 w-1/2 my-2">
                <b>Name:</b> {result?.name} 
                <b>Username:</b> {result?.username}</li>)}
            </ul>

        </div>
        </>
    )

}

export default List;