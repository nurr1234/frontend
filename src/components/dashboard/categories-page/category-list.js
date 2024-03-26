import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRecord, setOperation } from '../../../store/slices/misc-slice';
import CategoryData from '../../../helpers/data/category.json';


const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listRefreshToken } = useSelector(state => state.misc);

  useEffect(() => {
    // Kategorileri yükle
    setCategories(CategoryData);
    setTotalRows(CategoryData.length);
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    // Burada kategoriyi silme işlemini gerçekleştirin
    console.log("Deleted category with ID:", id);
  };

  const handleEdit = (row) => {
    // Seçilen kategoriyi redux store'a gönder
    dispatch(setCurrentRecord(row));
    // Kategori düzenleme işlemi için '/categories/edit' sayfasına yönlendir
    // Yeni eklenen kısım
    navigate(`/categories/edit/${row.id}`);
  };

  const getOperationButtons = (row) => (
    <div>
      <Button className="btn-link" onClick={() => handleEdit(row)}>
        <FaEdit />
      </Button>
      <Button className="btn-link" onClick={() => handleDelete(row.id)}>
        <FaTrash />
      </Button>
    </div>
  );

  const openNewCategoryPage = () => {
    // Yeni kategori ekleme sayfasını açın
    console.log("Opening new category page");
    // Örnek:
    // dispatch(setOperation("new"));
  };

  const openEditCategoryPage = (category) => {
    // Kategori düzenleme sayfasını açın
    console.log("Opening edit category page for:", category);

  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span>Category List</span>
            <Button onClick={openNewCategoryPage}>New Category</Button>
          </Card.Title>

          <DataTable
            value={categories}
            paginator
            rows={10}
            totalRecords={totalRows}
            loading={loading}
            emptyMessage="No categories found"
          >
            <Column field="name" header="Name" />
            <Column body={getOperationButtons} headerStyle={{ width: "120px" }} />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CategoryList;
