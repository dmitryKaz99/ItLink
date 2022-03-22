import HeaderContainer from "../../components/Header/HeaderContainer";
import MyLink from "../../components/common/Link/MyLink";
import ApiServices from "../../API/ApiServices";
import { ListGroup, Card } from "react-bootstrap";

const View = ({ users }) => {
  return (
    <HeaderContainer banner={"view"} title={"View page"}>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Header className="fw-bold"> Contact list:</Card.Header>

          {users.map((u) => (
            <ListGroup key={u.id} variant="flush">
              <ListGroup.Item>
                <MyLink href={`/view/${u.id}`} text={u.name} />
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Card>
      </div>
    </HeaderContainer>
  );
};

export async function getStaticProps() {
  try {
    const users = await ApiServices.getUsersOrUser();

    if (!users) return { notFound: true };
    return { props: { users } };
  } catch (e) {
    return { notFound: true };
  }
}

export default View;
