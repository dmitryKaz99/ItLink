import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
