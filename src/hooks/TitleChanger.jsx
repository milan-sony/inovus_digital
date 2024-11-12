import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const  TitleChanger = (title) =>{

    const location = useLocation()

    useEffect(()=>{
        document.title = title
        return()=>{
            document.title = 'Inovus Digital - Inovus Labs IEDC'
        }
    }, [title, location])
}

export default TitleChanger