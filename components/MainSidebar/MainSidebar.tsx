"use client"

import { Calendar, PanelLeftCloseIcon, PanelLeftIcon } from "lucide-react"
import { DashboardIcon, GroceriesIcon, MealsIcon } from "../icons"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Logo from "../Logo/Logo"
import { usePathname } from "next/navigation"
import Link from "next/link"
import slugify from "slugify"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "../ui/button"


// Menu items.
const items = [
  {
    title: "Groceries",
    url: "/",
    icon: GroceriesIcon,
  },
  {
    title: "Meals",
    url: "/meals",
    icon: MealsIcon,
    items: [
      {
        title: "Breakfast",
        url: "/meals/breakfast",
      },
      {
        title: "Main Course",
        url: "/meals/main-course",
      },
      {
        title: "Salads",
        url: "/meals/salads",
      },
      {
        title: "Snacks",
        url: "/meals/snacks",
      },
      {
        title: "Smoothies / Shakes",
        url: "/meals/smoothies-shakes",
      },
      {
        title: "Soups / Stews / Potages",
        url: "/meals/soups-stews-potages",
      },
      {
        title: "Other",
        url: "/meals/other",
      },
    ],
  },
  {
    title: "Meal Plan",
    url: "/meal-plan",
    icon: Calendar,
  }
]




function isActiveLink(pathname: string, itemUrl: string) {
  if (itemUrl === "/") {
    // homepage: active only if pathname is exactly "/"
    return pathname === "/";
  }
  // for other links, check if pathname starts with the itemUrl
  return pathname.startsWith(itemUrl);
}




function MainSidebar() {


  const pathname = usePathname();

  const { isMobile, setOpenMobile } = useSidebar();


  const handleCloseOnMobile = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }

  return (
    <Sidebar
      side="left"
      className="pt-8 gap-8 bg-sidebar"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent
            className="flex align-center justify-center"
          >
            <Link
              href='/'
              onClick={() => handleCloseOnMobile()}
              className="grow"
            >
              <Logo />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto md:hidden"
              onClick={() => handleCloseOnMobile()}
            >
              <PanelLeftCloseIcon />
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="h-full  pb-15">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="h-full">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      data-active-link={isActiveLink(pathname, item.url) ? 'true' : null}
                      className="[&>svg]:w-5 [&>svg]:h-auto gap-4 data-[active-link=true]:text-lime-500"
                      onClick={() => handleCloseOnMobile()}
                    >
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={`/meals/${slugify(item.title, {
                                lower: true,
                                strict: true,
                                trim: true
                              })}`}
                              data-active-link={pathname === item.url}
                              className="cursor-pointer data-[active-link=true]:text-lime-500"
                              onClick={() => handleCloseOnMobile()}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-auto">
                <SidebarMenuButton asChild>
                  <Link
                    href='/dashboard'
                    data-active-link={pathname === '/dashboard' ? 'true' : undefined}
                    className="[&>svg]:w-5 [&>svg]:h-auto gap-4 data-[active-link=true]:text-lime-500"
                  >
                    <DashboardIcon />
                    <span className="text-lg">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}


export default MainSidebar;