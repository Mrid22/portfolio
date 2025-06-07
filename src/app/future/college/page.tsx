import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
export default function College() {
  return (
    <Table className="bg-black">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">College</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Fees</TableHead>
          <TableHead>Course</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Tu Delft</TableCell>
          <TableCell>Netherlands</TableCell>
          <TableCell>
            <a href="https://www.tudelft.nl/en/onderwijs/opleidingen/bachelors/computer-science-and-engineering/bachelor-of-computer-science-and-engineering">
              Bsc Comp Sci. & Engeneering
            </a>
          </TableCell>
          <TableCell className="text-right">
            € 17,310 (subject to change, upper end)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            International University of Applied Sciences
          </TableCell>
          <TableCell>Germany</TableCell>
          <TableCell>
            <a href="https://www.iu.org/bachelors/computer-science/on-campus/">
              Bsc Computer Science
            </a>
          </TableCell>
          <TableCell className="text-right">€ 378,31</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
