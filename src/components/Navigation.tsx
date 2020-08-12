import React, {useState} from 'react'
import {withRouter, RouteComponentProps, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getProducts} from '../actions/actions'
import {RootState} from '../reducers'
import '../App.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const productState = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    
    return (
        <div>
      <Navbar light expand="md">
        <NavbarBrand className="text-danger">eSHOP.com</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cart">My orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/addProduct">Add product</NavLink>
            </NavItem>
            <NavItem>
                <div>
                <img src="https://image.flaticon.com/icons/png/512/263/263142.png" style={{height:'30px', marginTop:'5px', cursor:'pointer'}}/>
                <div style={{height:20, width:20, background:'red', borderRadius:8, display:'flex', flexDirection:'row', justifyContent:'center', marginTop:-8,}}>
                   <div style={{marginTop:-4, color:'white'}}>
                      {productState.numberOfItems}
                   </div>
                </div>
                </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default Navigation;
