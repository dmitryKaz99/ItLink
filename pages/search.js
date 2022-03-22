import HeaderContainer from "../components/Header/HeaderContainer";
import MyFormSearch from "../components/common/Form/MyFormSearch";
import IsEmptyItems from "../components/common/Items/IsEmptyItems";
import ApiServices from "../API/ApiServices";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Search = ({ todos }) => {
  const router = useRouter();
  useEffect(() => router.push("/search"), []);

  return (
    <HeaderContainer banner={"search"} title={"Search page"}>
      <div>
        <MyFormSearch router={router} />

        <IsEmptyItems items={todos} title={"todos"} isBack={false} />
        {todos.map((t) => (
          <div key={t.id} className="mb-4">
            <p style={t.completed ? { textDecoration: "line-through" } : null}>
              {t.id}. {t.title}
            </p>
          </div>
        ))}
      </div>
    </HeaderContainer>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const { search } = query;
    const todos = await ApiServices.getTodos(search);

    if (!todos) return { notFound: true };
    return { props: { todos } };
  } catch (e) {
    return { notFound: true };
  }
}

export default Search;
