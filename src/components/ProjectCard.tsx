import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  content: React.ReactNode;
  img_src: string;
  img_desc: string;
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
        <button className="btn">View Project</button>
      </CardFooter>
    </Card>
  );
}
