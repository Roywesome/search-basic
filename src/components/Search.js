import React, {useState, useEffect} from 'react'
import data from '../data/data.json'
import SearchResults from './SearchResults'
import SearchBox from './SearchBox'

export default function Search(){
    const [searchText, setSearchText] = useState("");
    const [isAtTop, setIsAtTop] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault(); 

        if(searchText !== ''){
            setIsAtTop(true)
            setIsSearch(true)

            if(userData?.length){
                const filterData = userData.filter((user, index) => {
                    return (
                        user.name.toLowerCase().includes(searchText)  ||
                        user.phone.toLowerCase().includes(searchText) ||
                        user.email.toLowerCase().includes(searchText) ||
                        user.username.toLowerCase().includes(searchText)
                    )
                });
    
                setResults(filterData)

                if(searchText !== filterData){
                    setIsSearching(true)
                }
            }

            setShowResults(true)

        }

    }

    const onClose = () => {
        setSearchText("")
        setIsAtTop(false)
        setIsSearch(false)
        setResults([])
        setShowResults(false)
        setIsSearching(false)

    }

    return(
        < div className="m-5">
        <SearchBox onSubmit = {onSubmit} 
        onClose = {onClose} 
        isAtTop = {isAtTop} 
        searchText = {searchText}
        setSearchText = {({target: {value}}) => setSearchText(value)}/>

        <SearchResults results = {results} 
        showResults = {showResults} 
        isSearching = {isSearching}/>
        </div>
    )
}

