import React, { useState } from 'react'
import * as constants from '../constants'
import Infinite from 'react-infinite'

const InfiniteScrollExample = () => {
    const [paragraphs, setParagraphs] = useState([])
    const [isInfiniteLoading, setIsInifiniteLoading] = useState(false)

    const handleInfiniteLoad = () => {
        setIsInifiniteLoading(true)
        const url = `${constants.hipsumApiUrl}?type=hipster-centric&sentences=10`

        fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log('paragraphs:', [...paragraphs, ...json])
            setParagraphs([...paragraphs, ...json]);
            setIsInifiniteLoading(false)
          }
        )
    }

    const infiniteLoadingSpinner = () => {
        return <div className="infinite-scroll-item">
            Loading...
        </div>
    }

    return (
        <div>
            <Infinite
            elementHeight={40}
            containerHeight={600}
            infiniteLoadBeginEdgeOffset={100}
            onInfiniteLoad={handleInfiniteLoad}
            loadingSpinnerDelegate={infiniteLoadingSpinner()}
            isInfiniteLoading={isInfiniteLoading}
            >
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </Infinite>
        </div>
    )
}

export default InfiniteScrollExample