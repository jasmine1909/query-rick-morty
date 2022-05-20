import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Card from './Card'

const Charater = () => {
    const [page, setPage] = useState(2)

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json();


    }

    const { data, status } = useQuery(["character", page], fetchCharacters)
    if (status === "loading") {
        return <div>Loading
        </div>
    }

    if (status === "error") {
        return <div>Loading
        </div>
    }

    return (
        <div className='characters'>
            {data.results.map((item) => (
                <Card item={item} />
            )

            )}
            <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>Previos</button>
            <button disabled={!data.info.next} onClick={() => setPage((prev) => prev + 1)}> Next</button>


        </div >
    )
}

export default Charater;
