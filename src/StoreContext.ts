import React from "react";
import store, {StoreType} from "./redux/store";

const StoreContext = React.createContext(store);

export default StoreContext;
