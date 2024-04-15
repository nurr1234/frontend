import React, { useEffect, useState } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookData from '../../helpers/data/book.json';

const AuthorDetail = () => {
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
   
    const exampleAuthor = { id: id, firstName: 'John', lastName: 'Doe', profileImage: 'profile.jpg' };
    setAuthor(exampleAuthor);

    
    const exampleBooks = BookData.filter(book => book.authorId === id);
    setBooks(exampleBooks);
  }, [id]);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center">
            <Image src={author.profileImage} roundedCircle style={{ width: '64px', height: '64px', marginRight: '10px' }} />
            <h2>{`${author.firstName} ${author.lastName}`}</h2>
          </div>
          <h4>Books by {`${author.firstName} ${author.lastName}`}</h4>
          <ul>
            {books.map(book => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthorDetail;
