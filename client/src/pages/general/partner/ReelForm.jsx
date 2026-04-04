import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ReelForm() {
    const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500";

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-black px-4 py-6 pb-24'>
            <h1>Add New Reel</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Reel Title' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
