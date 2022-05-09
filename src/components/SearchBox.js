import React, {useState} from 'react';

const SearchBox = ({onSubmit, onClose, isAtTop, searchText, setSearchText}) => {
    return (
        <div className={`flex flex-col mb-3 ${isAtTop ? "justify-start " : "justify-end items-center h-96 "}`}>
            <h2 className="text-3xl font-bold mb-3">Buscador de personas</h2>
            <form onSubmit={onSubmit}>
            <label>
                <input className="rounded-md border-2 border-indigo-500" 
                value={searchText} 
                onChange={setSearchText}/>
            </label>
            <button className="border-2 font-bold border-indigo-500/100 px-2 mx-2" 
            type="submit"
            disabled={!searchText.length} >Buscar</button>
            {isAtTop && <button className="border-2 font-bold border-rose-500/100 px-2 mx-2" 
            type="button"
            onClick={onClose}>Cerrar</button>}
            </form>
        </div>
    )
}

export default SearchBox;