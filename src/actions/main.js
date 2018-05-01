import fetch from 'isomorphic-fetch';

export const HANDLE_UPLOAD_PANEL_LINK = 'HANDLE_UPLOAD_PANEL_LINK';

export default class Actions {

    getProducts = () => {
        return dispatch => {
            fetch('src/assets/mock.json', { method: 'GET' })
                .then(response => (response.json()))
                .then(json => {dispatch({type: GET_PRODUCTS, payload: json})})
        };
    };

    setProducts = (products) => {
        return {
            type: SET_PRODUCTS,
            payload: products
        };
    };

}
