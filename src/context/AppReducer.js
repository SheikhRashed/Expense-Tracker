export default (state, action) => {
    switch (action.type) {
        default:
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
            return state;
    }
};
