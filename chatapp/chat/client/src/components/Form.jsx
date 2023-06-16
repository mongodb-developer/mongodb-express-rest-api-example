import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

const Form = () => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()
    const onSubmit = ({name, room }) =>
        history.push(`/chat?name=${name}&room=${room}`)
    
    return (
        <main className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                <input type="text" {...register("room", { required: true })} />
                <button type="submit">Join</button>
            </form>
        </main>
    )
}

export default Form