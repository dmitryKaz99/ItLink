import HeaderContainer from "../components/Header/HeaderContainer";
import MyModal from "../components/common/Modal/MyModal";
import MyFormPosts from "../components/common/Form/MyFormPosts";
import IsEmptyItems from "../components/common/Items/IsEmptyItems";
import MyPostItem from "../components/common/Items/MyPostItem";
import { connect } from "react-redux";
import { getPosts, getIsModal, getCurrentPost } from "../redux/selectors";
import {
  updatePost,
  setIsModal,
  setCurrentPost,
} from "../redux/actions/postsActions";
import { Button } from "react-bootstrap";

const Update = ({
  posts,
  updatePost,
  isModal,
  setIsModal,
  currentPost,
  setCurrentPost,
}) => {
  return (
    <HeaderContainer banner={"update"} title={"Update page"}>
      <div>
        <MyModal visible={isModal} setVisible={() => setIsModal(false)}>
          <h1 className="text-center mb-2">Update post form:</h1>
          <MyFormPosts addOrUpdatePost={updatePost} currentPost={currentPost} />
        </MyModal>

        <IsEmptyItems items={posts} title={"posts"} isBack={true} />
        {posts.map((p) => (
          <MyPostItem key={p.id} post={p}>
            <Button variant="warning" onClick={() => setCurrentPost(p)}>
              Update
            </Button>
          </MyPostItem>
        ))}
      </div>
    </HeaderContainer>
  );
};
const mapStateToProps = (state) => ({
  posts: getPosts(state),
  isModal: getIsModal(state),
  currentPost: getCurrentPost(state),
});

export default connect(mapStateToProps, {
  updatePost,
  setIsModal,
  setCurrentPost,
})(Update);
