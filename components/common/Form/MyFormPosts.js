import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const inputs = [
  { name: "title", label: "Title" },
  { name: "body", label: "Description" },
];

const MyFormPosts = ({ addOrUpdatePost, currentPost }) => {
  useEffect(() => {
    inputs.forEach((i) =>
      setValue(i.name, currentPost ? currentPost[i.name] : "")
    );
  }, [currentPost]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    currentPost ? addOrUpdatePost(currentPost.id, data) : addOrUpdatePost(data);
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((i) => {
          const { name, label } = i;

          return (
            <Form.Group className="mb-3" key={name}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                defaultValue={currentPost ? currentPost[name] : ""}
                {...register(name, {
                  required: "Required field",
                })}
              />
              {errors?.[name] && (
                <p className="mt-1 text-primary">{errors?.[name]?.message}</p>
              )}
            </Form.Group>
          );
        })}

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default MyFormPosts;
