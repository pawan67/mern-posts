import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import { getUser } from "../handlers/authHandler";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { getAllPosts } from "../handlers/postsHandler";
import PostCard from "../components/PostCard";
import UploadImage from "../components/UploadImage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const user = getUser();

  console.log(user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = async () => {
    const posts = await getAllPosts();
    console.log(posts);
    setPosts(posts);
  };
  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Profile user={user} />
      <button
        onClick={handleOpen}
        className="self-center mt-5  px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
      >
        Add Image
      </button>
      <div className=" grid lg:grid-cols-3 gap-5 mt-5">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UploadImage />
      </Modal>
    </Layout>
  );
}

export default Home;
