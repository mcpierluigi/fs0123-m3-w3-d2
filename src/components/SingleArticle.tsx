import { Button, Card } from "react-bootstrap";
import { Article } from "../interfaces/Article";

interface ArticleComponentProps {
  article: Article;
}

const SingleArticle = ({ article }: ArticleComponentProps) => {
  return (
    <Card className="d-flex mb-2 text-dark">
      <Card.Img className="card-img" variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.summary}</Card.Text>
        <Button variant="danger">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
