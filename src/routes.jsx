import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  FlagIcon,
  ClipboardDocumentIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Services",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: FlagIcon,
    name: "Our Locations",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: ClipboardDocumentIcon,
    name: "Blog",
    path: "/home",
    element: <Home />,
  },
  {
    icon: DocumentTextIcon,
    name: "Contact Us",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
