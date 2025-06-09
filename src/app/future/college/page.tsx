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
        <TableRow>
          <TableCell className="font-medium">Noroff</TableCell>
          <TableCell>Norway</TableCell>
          <TableCell>
            <a href="https://www.noroff.no/en/studies/vocational-school/front-end-development">
              Professional Degree in Front-End Development
            </a>
          </TableCell>
          <TableCell className="text-right">
            € 5382.44 <strong>per semester</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Amsterdam Tech</TableCell>
          <TableCell>Netherlands</TableCell>
          <TableCell>
            <a href="https://amsterdam.tech/software-engineering/">
              BSc Science In Software Engineering
            </a>
          </TableCell>
          <TableCell className="text-right">€ 2900</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Gisma University</TableCell>
          <TableCell>Germany</TableCell>
          <TableCell>
            <a href="https://amsterdam.tech/software-engineering/">
              BSc Computer Science
            </a>
          </TableCell>
          <TableCell className="text-right">
            € 13125 ( upper end, non eu viza)
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
