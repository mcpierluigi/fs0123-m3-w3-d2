import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import SingleArticle from "./SingleArticle";

const FetchArticles = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles";
  const [allTheArticles, setAllTheArticles] = useState<Article[]>([]);

  const fecthAllTheArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const articles = await response.json();
        setAllTheArticles(articles.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthAllTheArticles();
  }, []);

  console.log(allTheArticles);

  return (
    <Container>
      <Row>
        {allTheArticles.map(article => (
          <Col key={article.id}>
            <SingleArticle article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchArticles;
