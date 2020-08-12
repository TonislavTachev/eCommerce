import React from 'react'
import {Button} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {addToBasket} from '../actions/actions';
import {RootState} from '../reducers';

const Add = () => {
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const addToBask = () =>{
        const newProduct = {
            name: "Maika mu da eba",
            price: 69,
            image:"null"
        }
      dispatch(addToBasket(newProduct));
      history.push('/');
    }
    return (
        <div>
            <Button onClick={addToBask}>Press me</Button>
        </div>
    )
}

export default Add;
