import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
export default function Yearbook() {
  <div className="flex flex-col">
    <Collapsible>
      <CollapsibleTrigger>Layout Member (2022-2025)</CollapsibleTrigger>
      <CollapsibleContent>
        <p>sadf</p>
      </CollapsibleContent>
    </Collapsible>
    ;
    <Collapsible>
      <CollapsibleTrigger>Treasurer (2023-2024)</CollapsibleTrigger>
      <CollapsibleContent>
        <p>Treasurer (2023-2024)</p>
      </CollapsibleContent>
    </Collapsible>
    ;
    <Collapsible>
      <CollapsibleTrigger>Layout Editor (2024-2025)</CollapsibleTrigger>
      <CollapsibleContent>
        <p>Treasurer (2023-2023)</p>
      </CollapsibleContent>
    </Collapsible>
    ;
  </div>;
}
