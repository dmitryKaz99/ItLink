import Head from "next/head";
import MyLink from "../common/Link/MyLink";
import { useRouter } from "next/router";
import { Navbar, Container, Nav } from "react-bootstrap";

const routes = [
  { path: "/create", text: "Create" },
  { path: "/update", text: "Update" },
  { path: "/delete", text: "Delete" },
  { path: "/view", text: "View:SSR" },
  { path: "/list", text: "List" },
  { path: "/search", text: "Search:SSR" },
];

const HeaderContainer = ({ children, banner, title }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{banner}</title>
      </Head>

      <div className="pb-5">
        <Navbar
          bg="light"
          style={{ height: "60px" }}
          className="fixed-top shadow-sm"
        >
          <Container>
            <div className="fs-3">
              <MyLink href={"/"} text={"Home"} router={router} />
            </div>

            <Nav className="me-auto flex-wrap">
              {routes.map((r) => (
                <MyLink
                  key={r.path}
                  href={r.path}
                  text={r.text}
                  router={router}
                />
              ))}
            </Nav>
          </Container>
        </Navbar>
      </div>

      <Container className="d-flex justify-content-center flex-column my-5">
        <h1 className="text-center mb-4">{title}</h1>
        {children}
      </Container>
    </>
  );
};

export default HeaderContainer;
