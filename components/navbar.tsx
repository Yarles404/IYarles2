import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

// Navbar borrowed from https://www.material-tailwind.com/docs/react/navbar
export default function IYarlesNavbar() {
    const navItems = [
        { name: "About", href: "/" },
        { name: "Resume", href: "/resume" },
        { name: "Github", href: "https://github.com/Yarles404" }
    ];

    function navItem(name: string, href: string) {
        return (
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                key={name}
            >
                <a href={href} className="flex items-center">
                    {name}
                </a>
            </Typography>
        );
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItems.map((item) => navItem(item.name, item.href))}
        </ul>
    );

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span>IYarles</span>
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Contact</span>
                </Button>
                <IconButton
                    title="Menu"
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Contact</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}