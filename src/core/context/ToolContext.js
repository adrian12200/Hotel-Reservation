import { createContext } from "react";
import { ListState } from "./ListState";

export const ToolContext = createContext();
export const ToolProvider = ({children}) => {

    let states = {
        list_state: ListState()
    }

    return (  
        <ToolContext.Provider value = {{...states}}>
            {children}
        </ToolContext.Provider>
    );
}