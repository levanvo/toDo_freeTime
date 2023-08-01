import { produce } from "immer";

const Initial = {
    dataPr: [],
} as { dataPr: [] };
const call_products = (state = Initial, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case "fetchAPI":
                draft.dataPr = action.payload;
                return;
            default:
                return state;
        };
    });
};

export default call_products
