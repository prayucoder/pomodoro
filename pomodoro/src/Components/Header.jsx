import React from "react";
import "../Styles/Header.css";
import { Button, Link } from "@chakra-ui/react";
    
    const Header = () => {
    
    return(
    
    <nav>
    <a href="/">PomodoroTimer</a>
    <Button className="signUp1" variant={"ghost"} alignSelf={"flex-end"}>
        <Link href={'/signup'}>SignUp</Link>
    </Button>
    <Button variant={"solid"} alignSelf={"flex-end"}>
        <Link href={'/'}>login</Link>
    </Button>
    </nav>
    );
    };
    export default Header;