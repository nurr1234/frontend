import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryEditPage = () => {
  // Yerleşik kitap kontrolü
  const isBuiltinBook = true; // Bu değeri doğru veya yanlış olarak ayarlayın

  // Kitabı düzenleme işlemi
  const handleEditBook = () => {
    // BookEditPage'e yönlendirme işlemi
    // Buraya yönlendirme işlemini ekleyin
  };

  // Kitabı silme işlemi
  const handleDeleteBook = () => {
    if (isBuiltinBook) {
      // Eğer kitap yerleşikse, silme işlemi yapılamaz
      alert("Built-in books cannot be deleted.");
    } else {
      // Kitap silme işlemini gerçekleştirme
      // Silme işlemini gerçekleştirin ve gerekli işlemleri yapın
    }
  };

  return (
    <div>
      <h1>Category Edit Page</h1>
      <Button onClick={handleEditBook}>Edit Category</Button>
      <Button onClick={handleDeleteBook}>Delete Category</Button>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default CategoryEditPage;
