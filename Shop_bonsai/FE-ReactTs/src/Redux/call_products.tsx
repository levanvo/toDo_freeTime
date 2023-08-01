import { produce } from "immer";

const Initial = {
    dataPr: [],
} as { dataPr: [] };
const call_products = (state = Initial, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case "fetchAPI":
                return draft.dataPr = action.payload;
            default:
                return state;
        };
    });
};

export default call_products
