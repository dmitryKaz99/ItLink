import { Card } from "react-bootstrap";

const MyPostItem = ({ children, post }) => {
  const { id, title, body } = post;

  return (
    <Card className="mb-3 p-2 position-static">
      <Card.Body>
        <Card.Title>
          {id}. {title}
        </Card.Title>
        <Card.Text>{body}</Card.Text>

        <div className="text-center">{children}</div>
      </Card.Body>
    </Card>
  );
};

export default MyPostItem;
