import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink,Badge } from "shards-react";

const SidebarNavItem = ({ item }) => (

  <NavItem>
    <NavLink tag={RouteNavLink} to={item.to}>


            {item.htmlBefore && (
              <div
                className="d-inline-block item-icon-wrapper"
                dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
              />
            )}
            {
                <h7> {item.title}  <span>{item.subtitle}</span></h7> 
             }

              {item.htmlAfter && (
                <div
                  className="d-inline-block item-icon-wrapper"
                  dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                />
              )}


    </NavLink>
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
