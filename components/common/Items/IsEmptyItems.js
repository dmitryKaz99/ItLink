import MyLink from "../Link/MyLink";

const EmptyItems = ({ items, title, isBack }) => {
  return (
    <>
      {!items.length && (
        <div>
          <div className="text-center">
            <span>
              <i>{title}</i> were not found
            </span>
          </div>

          {isBack && (
            <div className="mt-4">
              <MyLink href={"/create"} text={`...go back create posts`} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EmptyItems;
