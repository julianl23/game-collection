import React, { Component } from "react";
import PropTypes, { instanceOf } from "prop-types";
import styled from "styled-components";
import { withCookies, Cookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import { prop, ifProp } from "styled-tools";
import Button from "../Button";

const UserMenuWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

const UserMenuTrigger = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-transform: uppercase;
  background: ${prop("theme.deepPurple")};
  color: ${prop("theme.white")};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.section`
  position: absolute;
  top: 49px;
  right: 0;
  background: ${prop("theme.backgroundGray")};
  border: 1px solid ${prop("theme.borderGray")};
  display: ${ifProp("open", "block", "none")};
  padding: 10px 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuListItem = styled.li`
  margin: 5px 0;

  &:first-child {
    margin-top: 0;
  }
`;

class UserMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  handleDocumentClick = e => {
    const { isOpen } = this.state;
    if (isOpen && !this.menuRef.current.contains(e.target)) {
      this.toggleMenu();
    }
  };

  toggleMenu = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  handleLogOut = () => {
    const { cookies, history } = this.props;

    cookies.remove("token");
    history.push("/login");
  };

  render() {
    const { currentUser } = this.props;
    const { isOpen } = this.state;

    return (
      <UserMenuWrapper ref={this.menuRef}>
        <UserMenuTrigger type="button" onClick={this.toggleMenu}>
          {currentUser.username[0]}
        </UserMenuTrigger>
        <Menu open={isOpen}>
          <div>{currentUser.username}</div>
          <MenuList>
            <MenuListItem>Collection</MenuListItem>
            <MenuListItem>Wish List</MenuListItem>
            <MenuListItem>
              <Button onClick={this.handleLogOut} size="small">
                Log out
              </Button>
            </MenuListItem>
          </MenuList>
        </Menu>
      </UserMenuWrapper>
    );
  }
}

UserMenu.propTypes = {
  currentUser: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  cookies: instanceOf(Cookies).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withCookies(UserMenu));

export { UserMenu as UserMenuComponent };
