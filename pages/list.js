import HeaderContainer from "../components/Header/HeaderContainer";
import MyLoader from "../components/common/Loader/MyLoader";
import MyPostItem from "../components/common/Items/MyPostItem";
import MyPagination from "../components/common/Pagination/MyPagination";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import {
  getApiPosts,
  getIsLoading,
  getError,
  getTotalPages,
  getLimit,
  getCurrentPage,
} from "../redux/selectors";
import {
  queryForApiPosts,
  setCurrentPage,
} from "../redux/actions/apiPostsActions";

const List = ({
  apiPosts,
  isLoading,
  error,
  totalPages,
  limit,
  page,
  queryForApiPosts,
  setCurrentPage,
}) => {
  const refHeader = useRef(null);
  useEffect(() => {
    queryForApiPosts(limit, page);
    refHeader.current.scrollIntoView();
  }, [limit, page]);

  return (
    <>
      <div ref={refHeader} />
      <HeaderContainer banner={"list"} title={"List page"}>
        <div>
          <div className="text-center">
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <MyLoader />}
          </div>

          {apiPosts.map((p) => (
            <MyPostItem key={p.id} post={p} />
          ))}

          <MyPagination
            totalCount={totalPages}
            limit={limit}
            currentPage={page}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </HeaderContainer>
    </>
  );
};
const mapStateToProps = (state) => ({
  apiPosts: getApiPosts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
  totalPages: getTotalPages(state),
  limit: getLimit(state),
  page: getCurrentPage(state),
});

export default connect(mapStateToProps, { queryForApiPosts, setCurrentPage })(
  List
);
