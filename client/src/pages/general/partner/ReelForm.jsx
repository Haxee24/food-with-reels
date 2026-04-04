import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ReelForm() {
    const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500";

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
            <div className="min-h-screen bg-white dark:bg-black">
        
              {/* Page Header */}
              <div className="p-4 border-b border-gray-200 dark:border-neutral-800">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Reel
                </h1>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Discover food places around you
                </p>
              </div>
              <div className='min-h-screen bg-white dark:bg-black px-4 py-6 pb-24'>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                        type="text"
                        placeholder="Reel Title"
                        className={inputStyle}
                        {...register("title", { required: "Title is required" })}
                        />

                        {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}

                        <button type='submit' className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                        Submit
                        </button>
                    </form>
                </div>
            </div>
    )
}
