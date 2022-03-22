import { useEffect } from "react";
import s from "../../../styles/MyModal.module.scss";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [s.modal];
  if (visible) rootClasses.push(s.active);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [visible]);

  return (
    <div className={rootClasses.join(" ")} onClick={setVisible}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={s.close} onClick={setVisible}>
          &#10006;
        </div>
      </div>
    </div>
  );
};

export default MyModal;
