import {createContext, useState} from 'react'

export const PostContext = createContext(null)

function Post ({children}) {
    const [PostDetails, setPostDetails] = useState()    
    return (
        <PostContext.Provider value={{PostDetails, setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post