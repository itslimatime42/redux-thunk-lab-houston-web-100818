const loadingCats = () => {
    return { type: 'LOADING_CATS' }
}

const getCats = cats => {
    return {
        type: 'FETCH_CATS',
        cats: cats
    }
}

export function fetchCats() {
    return (dispatch) => {
        dispatch(loadingCats())
        return fetch("http://localhost:4000/db")
          .then(res => res.json())
          .then(cats => dispatch(getCats(cats.images)));
    }
}