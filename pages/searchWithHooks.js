import HeaderContainer from "../components/Header/HeaderContainer";
import IsEmptyItems from "../components/common/Items/IsEmptyItems";
import ApiServices from "../API/ApiServices";
import { useState, useMemo } from "react";
import { FormControl } from "react-bootstrap";

const Search = ({ todos }) => {
  const [search, setSearch] = useState(""),
    [todosFilter, setTodosFilter] = useState([]);

  useMemo(() => {
    setTodosFilter(
      todos.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [todos, search]);

  return (
    <HeaderContainer banner={"search"} title={"Search page"}>
      <div>
        <div className="mb-4">
          <FormControl
            placeholder="todos on title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <IsEmptyItems items={todosFilter} title={"todos"} isBack={false} />
        {todosFilter.map((t) => (
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

export async function getServerSideProps() {
  try {
    const todos = await ApiServices.getTodos();

    if (!todos) return { notFound: true };
    return { props: { todos } };
  } catch (e) {
    return { notFound: true };
  }
}

export default Search;
