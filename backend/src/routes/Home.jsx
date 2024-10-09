import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const addCard = (num) => {
  let cards = [];
  for (let i = 0; i < num; i++) {
    cards.push(
      <Link to={`/note/${i}`}>
        <Card className="m-2">
          <CardHeader>
            <CardTitle>#My Note {i}</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>eos voluptatem numquam omnis illo possimus </p>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">Last edited: 11:37 PM</p>
          </CardFooter>
        </Card>
      </Link>
    );
  }
  return cards;
};

function Home() {
  return <div className="my-3 mx-2 grid grid-cols-3">{addCard(3)}</div>;
}

export default Home;
