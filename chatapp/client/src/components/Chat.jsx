const [users, setUsers] = useState([])
const [messages, setMessages] = useState([])

import io from "socket.io-client"
import { useLocation } from "react-router-dom"
import { END_POINT } from "../Constants"
import { useEffect } from "react"
let socket

const location = useLocation()

useEffect(() => {
    socket = io(END_POINT)
    socket.emit("join", {name, room })

    return () => {
        socket.emit("left")
        socket.off()
    }
}, [END_POINT, location.search])

useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]))
    socket.on("room-data", ({ users }) => setUsers(users))
}, []);

return(
    <main className="chat">
        <Info room={room} users={users} />
        <ChatView messages={messages} name={name} room={room} />
    </main>
)