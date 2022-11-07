import React from "react";
import { createPost } from "../handlers/postsHandler";

const UploadImage = () => {
  const [image, setImage] = React.useState(null);
  const [caption, setCaption] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const postImage = (pics) => {
    console.log(pics);

    if (
      pics.type === "image/jpg" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "helloworld");
      data.append("cloud_name", "dewctbby3");
      fetch("https://api.cloudinary.com/v1_1/dewctbby3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = await createPost(caption, image);
      //   reload page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" w-[350px] bg-gray-800 p-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
        <div>
          <h1 className="text-2xl font-semibold text-white">Add Image</h1>
          <form onSubmit={handleSubmit} className="mt-5 space-y-5">
            <div className="space-y-1 text-sm">
              <label for="username" className="block dark:text-gray-400">
                Caption
              </label>

              <input
                onChange={(e) => setCaption(e.target.value)}
                type="text"
                name="text"
                id="text"
                placeholder="Caption"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                for="image"
                className="w-full  px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 cursor-pointer focus:dark:border-violet-400"
              >
                Upload Image
              </label>
              <input
                onChange={(e) => postImage(e.target.files[0])}
                type="file"
                name="image"
                id="image"
                className="hidden"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            >
              Add Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
