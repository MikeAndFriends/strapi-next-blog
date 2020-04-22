import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  console.log('process.env', process.env);
  return (
        <div className="uk-card uk-card-muted">
          <Link href={{ pathname: "article", query: { id: article.id } }}>
            <a className="uk-link-reset">
              <div className="uk-card-media-top">
                <img
                  src={process.env.BACKEND_URL + article.image.url}
                  alt={article.image.url}
                  height="100"
                />
              </div>
            </a>
          </Link>
          <div className="uk-card-body">
            <Link href={{ pathname: "category", query: { id: article.category.id } }}>
              <a className="uk-link-reset">
                <p id="category" className="uk-text-uppercase">
                  {article.category.name}
                </p>
              </a>
            </Link>
            <Link href={{ pathname: "article", query: { id: article.id } }}>
              <a className="uk-link-reset">
                <p id="title" className="uk-text-large">
                  {article.title}
                </p>
            </a>
          </Link>
          </div>
        </div>
  );
};

export default Card;
