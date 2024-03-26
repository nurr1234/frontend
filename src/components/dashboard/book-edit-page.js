import React, { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title); // onSubmit işlevini çağırarak kitap bilgilerini güncelleyin
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}

export default BookEdit;
