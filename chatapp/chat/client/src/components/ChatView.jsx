const { Socket } = require("socket.io/dist")

const ChatView = ({ messages, name, room }) => {
    const {register, handleSubmit, reset } = useForm()

    const sendMessage = ({ message }) => {
        message && socket.emit("send-message", message)
        reset()
    }
}