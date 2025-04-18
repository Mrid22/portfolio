import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="!w-x1 z-50 p-0">
      <NavigationMenuList className="bg-black/50">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="../projects/ui-design">
              Web Development
            </NavigationMenuLink>
            <NavigationMenuLink href="../projects/web-development">
              UI Design
            </NavigationMenuLink>
            <NavigationMenuLink href="../projects/python">
              Python
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
