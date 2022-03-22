import Link from "next/link";

const MyLink = ({ href, text, router }) => {
  const currentRouter = router ? router : "";

  return (
    <div className="me-3">
      <Link href={href}>
        <a className={currentRouter.pathname === href ? "text-primary" : ""}>
          {text}
        </a>
      </Link>
    </div>
  );
};

export default MyLink;
