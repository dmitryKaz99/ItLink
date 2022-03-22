import HeaderContainer from "../components/Header/HeaderContainer";
import MyFormPosts from "../components/common/Form/MyFormPosts";
import IsEmptyItems from "../components/common/Items/IsEmptyItems";
import MyPostItem from "../components/common/Items/MyPostItem";
import { connect } from "react-redux";
import { getPosts } from "../redux/selectors";
import { addPost } from "../redux/actions/postsActions";

const Create = ({ posts, addPost }) => {
  return (
    <HeaderContainer banner={"create"} title={"Create page"}>
      <div>
        <MyFormPosts addOrUpdatePost={addPost} />
        <div className="mb-3" />

        <IsEmptyItems items={posts} title={"posts"} isBack={false} />
        {posts.map((p) => (
          <MyPostItem key={p.id} post={p} />
        ))}
      </div>
    </HeaderContainer>
  );
};
const mapStateToProps = (state) => ({ posts: getPosts(state) });

export default connect(mapStateToProps, { addPost })(Create);
