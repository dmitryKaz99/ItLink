import HeaderContainer from "../components/Header/HeaderContainer";
import MyModal from "../components/common/Modal/MyModal";
import IsEmptyItems from "../components/common/Items/IsEmptyItems";
import MyPostItem from "../components/common/Items/MyPostItem";
import { connect } from "react-redux";
import { getPosts, getIsModal, getCurrentPost } from "../redux/selectors";
import {
  deletePost,
  setIsModal,
  setCurrentPost,
} from "../redux/actions/postsActions";
import { Button } from "react-bootstrap";

const Delete = (props) => {
  const {
    posts,
    deletePost,
    isModal,
    setIsModal,
    currentPost,
    setCurrentPost,
  } = props;

  return (
    <HeaderContainer banner={"delete"} title={"Delete page"}>
      <div>
        <MyModal visible={isModal} setVisible={() => setIsModal(false)}>
          <div className="text-center">
            <h1 className="mb-4">Are you sure?</h1>
            <Button
              variant="success"
              onClick={() => {
                deletePost(currentPost.id);
              }}
            >
              Confirm
            </Button>
          </div>
        </MyModal>

        <IsEmptyItems items={posts} title={"posts"} isBack={true} />
        {posts.map((p) => (
          <MyPostItem key={p.id} post={p}>
            <Button variant="danger" onClick={() => setCurrentPost(p)}>
              Delete
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
  deletePost,
  setIsModal,
  setCurrentPost,
})(Delete);
