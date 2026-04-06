import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ReelForm() {
    const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500";

    const {
      register,
      handleSubmit,
      formState: {errors},
      watch
    } = useForm();
    
    const selectedVideo = watch("reel");
    console.log(selectedVideo);

    const onSubmit = (data) => {
      const formData = new FormData();
      formData.append("caption", data.title);
      console.log(data.title);
      formData.append("reel", data.reel[0]);
      axios.post("/api/partner/add-reel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Reel created successfully:", response.data);
      }).catch((error) => {
        console.error("Error creating reel:", error);
      });
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

                          <label className="flex flex-col items-center justify-center w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 cursor-pointer hover:border-orange-500 hover:text-orange-500 transition">
                            <span>Click to upload a reel video</span>
                            <span className="text-sm mt-1">
                              MP4, MOV or short clips
                            </span>
                            <input
                              type="file"
                              accept="video/*"
                              {...register("reel", { 
                                required: "Video is required",
                                validate: async (files) => {
                                  const file = files?.[0];
                                  if (!file) return "Video is required";
                                  const url = URL.createObjectURL(file);
                                  return new Promise((resolve) => {
                                    const video = document.createElement("video");
                                    video.preload = "metadata";
                                    video.src = url;
                                    video.onloadedmetadata = () => {
                                      URL.revokeObjectURL(url);
                                      if (video.duration > 180) {
                                        resolve("Video must be 3 Minutes or less");
                                      }
                                      resolve(true);
                                    };
                                  })
                                }
                              })}
                              className="hidden"
                            />
                          </label>
                          {selectedVideo?.[0] && (
                              <span className="mt-3 text-orange-500 text-sm font-medium">
                                Selected: {selectedVideo[0].name}
                              </span>
                            )}
                            <br />
                        {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}

                        <button type='submit' className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                        Create Reel
                        </button>
                    </form>
                </div>
            </div>
    )
}
