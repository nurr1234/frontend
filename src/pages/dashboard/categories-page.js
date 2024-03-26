import React, { useState } from "react";
import { useSelector } from "react-redux";
import Spacer from "../../components/common/spacer";
import PageHeader from "../../components/common/page-header";
import CategoryNewPage from "../../components/dashboard/categories-page/category-new-page"
import CategoryEditPage from "../../components/dashboard/categories-page/category-edit-page";
import CategoryList from "../../components/dashboard/categories-page/category-list";
import CategorySearch from "../../components/dashboard/categories-page/category-search";

const CategoryPage = () => {
  const { currentOperation } = useSelector(state => state.misc);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <PageHeader title="Category Page" />
      <Spacer />
      <CategorySearch
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <Spacer />
      {currentOperation === "new" && (
        <>
          <CategoryNewPage/>
          <Spacer />
        </>
      )}
      {currentOperation === "edit" && (
        <>
          <CategoryEditPage />
          <Spacer />
        </>
      )}

      <CategoryList searchText={searchText} />
      <Spacer />
    </>
  );
};

export default CategoryPage;
