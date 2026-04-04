import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ReelForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Add New Reel</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Reel Title' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
