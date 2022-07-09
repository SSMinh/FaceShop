const init = {
    cartList: [],
    order: [],
};
const rootReducer = (state = init, actions) => {
    const product = actions.payload;
    switch (actions.type) {
        case 'BUY':
            const exit = state.cartList.find((item) => item.id === product.id && item.completed !== true);
            if (exit) {
                return {
                    ...state,
                    cartList: state.cartList.map((x) =>
                        x.id === product.id && x.completed !== true
                            ? { ...x, qyt: x.qyt + 1, total: x.price * (x.qyt + 1) }
                            : x,
                    ),
                };
            } else {
                return {
                    ...state,
                    cartList: [...state.cartList, { ...product, qyt: 1, total: product.price }],
                };
            }
        case 'REDUCE':
            const exit1 = state.cartList.find((item) => item.id === product.id && item.completed === false);
            if (exit1.qyt === 1) {
                return {
                    ...state,
                    cartList: state.cartList.filter((x) => x.id !== exit1.id),
                };
            } else {
                return {
                    ...state,
                    cartList: state.cartList.map((x) =>
                        x.id === product.id && x.completed !== true
                            ? { ...x, qyt: x.qyt - 1, total: x.price * (x.qyt - 1) }
                            : x,
                    ),
                };
            }
        case 'DELETE':
            const exit2 = state.cartList.find((item) => item.id === product.id);
            const exit3 = state.order.find((item) => item.id === product.id);
            return {
                ...state,
                cartList: state.cartList.filter((x) => x.id !== exit2.id),
                order: state.order.filter((x) => x.id !== exit3.id),
            };
        case 'CHECKED':
            const bought = state.order.filter((item) => product.includes(item.id));
            const exit4 = state.cartList.filter((item) => product.includes(item.id));
            const completed = exit4.map((x) => (x.completed !== true ? { ...x, completed: true } : x));
            return {
                ...state,
                order: [...state.order, ...completed],
                cartList: state.cartList.filter((x) => !product.includes(x.id)),
            };
        default:
            return state;
    }
};

export default rootReducer;
