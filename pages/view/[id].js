import HeaderContainer from "../../components/Header/HeaderContainer";
import MyLink from "../../components/common/Link/MyLink";
import ApiServices from "../../API/ApiServices";
import { Card } from "react-bootstrap";

const Contact = ({ user }) => {
  const { address, company } = user;

  return (
    <HeaderContainer banner={user.name} title={"Contact"}>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Header>{user.username}</Card.Header>

          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <div>
              <ul>
                <li>
                  <i>Phone:</i> {user.phone}
                </li>
                <li>
                  <i>Email:</i> {user.email}
                </li>
                <li>
                  <i>Website:</i> {user.website}
                </li>
                <li>
                  <i>Address:</i> {address.city}, {address.street},
                  {address.suite}
                </li>
                <li>
                  <i>Company:</i> {company.name} ({company.bs})
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="mt-4">
        <MyLink href={"/view"} text={"...go back view"} />
      </div>
    </HeaderContainer>
  );
};

export async function getStaticPaths() {
  const users = await ApiServices.getUsersOrUser();

  const paths = users.map(({ id }) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const user = await ApiServices.getUsersOrUser(params.id);

  if (!user) return { notFound: true };
  return { props: { user } };
}

export default Contact;
