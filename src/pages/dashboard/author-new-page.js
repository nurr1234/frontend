import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Form ve Button bileşenlerini react-bootstrap'dan içe aktarın
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu react-router-dom'dan içe aktarın

const AuthorNewPage = () => {
  // Form giriş değerlerini tutmak için state değişkenleri
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ssn, setSSN] = useState('');

  const navigate = useNavigate(); // useNavigate hook'unu kullanarak yönlendirme yapmak için navigate fonksiyonunu alın

  // Form gönderimini işlemek için fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form gönderimini işleyebilirsiniz, örneğin verileri arka uca gönderme gibi
    // Şimdilik, form verilerini sadece konsola yazdıralım
    console.log({ firstName, lastName, ssn });
    // İsteğe bağlı olarak, form gönderiminden sonra kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
    // Örneğin:
    navigate('/author'); // Kullanıcıyı yazar listesi sayfasına yönlendir (örneğin)
  };

  return (
    <div className="container mt-4">
      <h2>New Author</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="ssn">
          <Form.Label>SSN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter SSN"
            value={ssn}
            onChange={(e) => setSSN(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthorNewPage;
