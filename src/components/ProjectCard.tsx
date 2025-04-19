import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  img_src: string | StaticImageData;
  img_desc: string;
  link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={props.img_src} alt={props.img_desc}></Image>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <>
            <Link href={props.link}>See More</Link> <ArrowRight />
          </>
        </Button>
      </CardFooter>
    </Card>
  );
}
