import { useState } from 'react';
function Search(props){
    const [search, setSearch] = useState("");

    const onChangeSearch = () => {
        props.fromSearchComponent(search);
    }

    const searchKeyDown = (e) => {
        if(e.key === "Enter"){
            onChangeSearch();
        }
    }

    return (
        <>
            <div>
                Cari Artikel : <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeyDown} /> <button onClick={onChangeSearch} >Cari</button>
            </div>
            <small>Ditemukan {props.totalData} data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search;