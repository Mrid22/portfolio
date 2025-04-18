import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Title</CardTitle>
        <CardDescription>Project Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Project Content</p>
      </CardContent>
      <CardFooter>
        <button className="btn">View Project</button>
      </CardFooter>
    </Card>
  );
}
