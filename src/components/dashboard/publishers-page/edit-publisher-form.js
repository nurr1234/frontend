import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // react-bootstrap'dan Form ve Button'ı içeri aktarın

const PublisherEditPage = () => {
  const { id } = useParams(); // URL'den yayıncı kimliğini alın
  const [name, setName] = useState(''); // Yayıncı adını saklamak için bir state kullanın

  // Simüle edilmiş bir örnek: URL'deki yayıncı kimliğine göre yayıncı bilgilerini getirin
  useEffect(() => {
    // Burada yayıncı bilgilerini getirme işlemini gerçekleştirebilirsiniz, örneğin, backend API'sine bir istek gönderebilirsiniz
    // Örneğin: fetchPublisherById(id)
    // Gelen yayıncı bilgilerini state'e ayarlayın
    setName('Sample Publisher');
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form gönderimini işleyebilirsiniz, örneğin, form verilerini backend'e gönderebilirsiniz
    console.log({ name });
    // İsteğe bağlı olarak, form gönderiminden sonra kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
    // Örneğin:
    // history.push('/publishers'); // varsayılan olarak yayıncılar sayfasına yönlendirme
  };

  return (
    <div className="container mt-4">
      <h2>Edit Publisher</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Publisher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter publisher name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default PublisherEditPage;
