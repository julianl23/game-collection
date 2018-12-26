import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";

import Button from "../Button";
import AddItemDetailView from "./AddItemDetailView";
import { PlusSquare } from "../Icons";

const Item = styled.li`
  margin-bottom: 48px;
`;

const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const SearchResultInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  margin-left: 13px;
`;

const Companies = styled.p`
  margin: 0;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${theme("deepPurple")};
  margin-bottom: 7px;
  display: inline-block;
`;

const Platforms = styled.p`
  margin: 20px 0 0;
`;

// const CancelButton = styled.button`
//   -webkit-appearance: none;
//   background: transparent;
//   border: 0;
//   align-self: flex-start;
//   padding: 5px;
//   cursor: pointer;
// `;

class SearchResultItem extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  renderCompanyList = (companies, prefix) => {
    const companyNames = companies.map(company => company.name);
    let companyNameString;

    if (!companies.length) {
      return null;
    }

    if (companies.length > 1) {
      const otherCount = companies.length - 2;
      const othersString = `${otherCount} ${otherCount > 1 && "s"}`;
      companyNameString = `${companyNames[0]}, ${
        companyNames[1]
      }, and ${othersString}`;
    } else {
      companyNameString = companyNames.join(", ");
    }

    return (
      <React.Fragment>
        {prefix} {companyNameString}
      </React.Fragment>
    );
  };

  renderPlatformList = platforms => {
    const platformNames = platforms.map(platform => platform.name);
    let platformsString;

    if (!platforms.length) {
      return null;
    }

    if (platforms.length > 2) {
      const otherCount = platforms.length - 2;
      const othersString = `${otherCount} other${otherCount > 1 ? "s" : ""}`;
      platformsString = `${platformNames[0]}, ${
        platformNames[1]
      }, and ${othersString}`;
    } else {
      platformsString = platformNames.join(", ");
    }

    return <Platforms>Platforms: {platformsString}</Platforms>;
  };

  handleToggleAddView = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  handleAddGame = collectionItem => {
    console.log(collectionItem);
  };

  render() {
    const { game } = this.props;
    const { expanded } = this.state;

    const { cover, title, developer, publisher, platforms } = game;

    return (
      <Item>
        <SearchResultInfo>
          <img src={cover.url} alt={`Cover of ${title}`} />
          <ContentSection>
            <Title>{title}</Title>
            <Companies>
              {this.renderCompanyList(developer, "Developed by")}
              <br />
              {this.renderCompanyList(publisher, "Published by")}
            </Companies>

            {this.renderPlatformList(platforms)}
          </ContentSection>
        </SearchResultInfo>
        {expanded && (
          <AddItemDetailView
            game={game}
            handleAddGame={this.handleAddGame}
            handleToggleAddView={this.handleToggleAddView}
          />
        )}
        {!expanded && (
          <AddButton block onClick={this.handleToggleAddView}>
            <PlusSquare />Add to my collection
          </AddButton>
        )}
      </Item>
    );
  }
}

SearchResultItem.propTypes = {
  game: PropTypes.object.isRequired,
};

export default SearchResultItem;
