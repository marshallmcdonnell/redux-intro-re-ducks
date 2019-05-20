import types from "./types";

export default {
    increment: () => ({ type: types.INCREMENT }),
    decrement: () => ({ type: types.DECREMENT }),
    reset: () => ({ type: types.RESET })
};
