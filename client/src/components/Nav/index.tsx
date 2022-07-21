import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import useWindowScroll from "../../hooks/useWindowScroll";

const NavbarWrapper = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  background: rgba(256, 256, 256);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Link)`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #212629;
  @media (max-width: 700px) {
    margin: 0;
  }
`;

const TitleLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const TitleText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchMenu = styled.li`
  width: 20rem;
  display: flex;
  align-items: center;
  height: 3.875rem;
  transition: all 0.5s ease 0s;
  position: relative;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

// const SearchResultWrapper = styled.div`
//   position: absolute;
//   top: 60px;
//   left: 0;
//   z-index: 9999999;
//   background-color: #fff;
//   width: 100%;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
//   max-height: 480px;
//   overflow-y: scroll;
// `;

// const SearchResultListItem = styled.li`
//   padding: 4px 6px;
//   box-sizing: border-box;
//   color: #222;
//   font-size: 16px;
//   width: 100%;
//   height: 24px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   &:hover {
//     background-color: #eee;
//   }
// `;

// const SearchResultList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 68%;
  height: 2.375rem;
  border-radius: 0.625rem;
  padding: 0.4375rem 0.5rem;
  @media (max-width: 700px) {
    margin-left: 0.5rem;
  }
`;

const SearchInput = styled.input`
  font-size: 0.875rem;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 0.5rem;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 1.4375rem;
`;

const SideNavWrapper = styled.div`
  z-index: 998;
  position: fixed;
  width: 100%;
  margin-top: 5rem;
  background: rgba(255, 255, 255);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const SideNav = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideHideNav = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

const SideLink = styled(Link)`
  margin: 0 6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #212629;
  @media (max-width: 700px) {
    margin: 0 2rem;
  }
`;

const Navbar: React.FC = () => {
  const navHide = useWindowScroll();

  return (
    <>
      <NavbarWrapper>
        <Wrapper>
          <Title to="/">
            <TitleLogo src="./dogImg.png" alt="dog" />
            <TitleText>TOTO</TitleText>
          </Title>
          <SearchMenu>
            <SearchContainer>
              <SearchFormWrapper>
                <SearchForm>
                  <SearchLabel>
                    <FcSearch />
                    <SearchInput placeholder="견종의 이름을 검색해보세요." />
                  </SearchLabel>
                </SearchForm>
              </SearchFormWrapper>
            </SearchContainer>
            {/* <SearchResultWrapper>
            <SearchResultList>
              {searchResult?.results.map((searchResultItem) => (
                <Link
                  href={`/movie/${searchResultItem.id}`}
                  key={searchResultItem.id}
                >
                  <SearchResultListItem>
                    {searchResultItem.title}
                  </SearchResultListItem>
                </Link>
              ))}
            </SearchResultList>
          </SearchResultWrapper> */}
          </SearchMenu>
        </Wrapper>
      </NavbarWrapper>
      <SideNavWrapper>
        {
          navHide  === true ?
          <SideHideNav>
            <SideLink to="/">홈</SideLink>
            <SideLink to="/">커뮤니티</SideLink>
            <SideLink to="/">좋아요</SideLink>
          </SideHideNav>
          :
          <SideNav>
            <SideLink to="/">홈</SideLink>
            <SideLink to="/">커뮤니티</SideLink>
            <SideLink to="/">좋아요</SideLink>
          </SideNav>
        }
      </SideNavWrapper>
    </>
  );
};

export default Navbar;
