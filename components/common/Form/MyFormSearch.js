import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const MyFormSearch = ({ router }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ title }) => {
    const correctTitle = title.trim().toLowerCase();
    router.push(`/search?search=${correctTitle}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Search</Form.Label>
          <Form.Control
            {...register("title", {
              pattern: {
                value: /[A-Za-z0-9]/,
                message: "Only 'en' words or numbers",
              },
              required: "Required field",
            })}
            placeholder="todos on title..."
          />
          {errors?.title && (
            <p className="mt-1 text-primary">{errors?.title?.message}</p>
          )}
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default MyFormSearch;
