import SecuredConnexion from "../components/Log/SecuredConnexion";
import GetAllPosts from "../components/Post/post";
import Nav from "../components/Navigation";

const Posts = () => {
  return (
    <div>
      <Nav />
      <SecuredConnexion>
        <div className="posts">
          <div className="posts-container">
            <GetAllPosts />
          </div>
        </div>
      </SecuredConnexion>
    </div>
  )
};

export default Posts;