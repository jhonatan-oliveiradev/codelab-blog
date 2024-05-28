"use client";

import { HeartIcon } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { articles } from "@/articles";
import { useState } from "react";
import { Button } from "./ui/button";

const Article = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-center px-6">
      {articles.map((article) => (
        <Card key={article.id} className="my-10 border-primary">
          <CardHeader className="flex flex-row items-center justify-between">
            <p className="text-xs text-primary">{article.date}</p>
            {isFavorite ? (
              <Button
                className="bg-transparent"
                size="icon"
                onClick={() => setIsFavorite(false)}
              >
                <HeartIcon size={20} className="fill-primary text-primary" />
              </Button>
            ) : (
              <Button
                className="bg-transparent"
                size="icon"
                onClick={() => setIsFavorite(true)}
              >
                <HeartIcon size={20} className="text-primary" />
              </Button>
            )}
          </CardHeader>
          <h2 className="text-lg font-semibold">{article.title}</h2>
          <p className="text-sm text-gray-500">{article.description}</p>
          <button className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span>Salvar</span>
          </button>
        </Card>
      ))}
    </section>
  );
};

export default Article;
