import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useQueryParams = () => {
    const [params, setParams] = useState({})
    const location = useLocation()

    useEffect(() => {
        const query = new URLSearchParams(location.search)
        const data = {}

        for (let params of query.entries()) {
            data[params[0]] = params[1]
        }

        setParams(data)
    }, [])

    return params
}

export default useQueryParams