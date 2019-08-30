import React from "react";
import { Provider } from "react-redux";
import assembleStore from "./src/store";

export default ({ element }: { element: any }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = assembleStore();
  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
};