import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button,Icon,Image, useFocusEffect} from "@chakra-ui/react";
import Logo from "../ui/Logo";
import ButtonDoc from "../ui/ButtonDoc";
import { useHistory,useLocation } from "react-router-dom";
import BharatSimLogo from '../../assets/Logo_color_bg.png';

const MenuItem = ({ children, isLast, flag,to = "/", ...rest }) => {

  // let location = useLocation();
  // let path = location.pathname.toString().slice(1);
  // console.log('path:   ' ,path);
  // console.log( 'path:' ,path.pathname.toString().slice(1),children.toString().toLowerCase() );
  return (
    <>
    { flag=='current_tab'? 
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
      borderBottom={"2px"}
      borderBottomColor={'white'}  
    >
  
      <Link to={to}>{children}</Link> </Text>

      : 
      <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
  
      <Link to={to}>{children}</Link>
      </Text>
     }


     </>
      
   
  );
};

const MenuItemUrl = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to} isExternal>{children}</Link>

    </Text>
  );
};



const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const history = useHistory();
  const handleRoute = () =>{
    history.push("/about");
  }

  const [loc,updateLoc] = React.useState('');
  let location = useLocation();
  //write a useffect

 
  // let path = location.pathname.toString().slice(1);
  //   return () => {
  //     console.log('useEffect return');
  //   }
  // }
  // ,[])
  // let location = useLocation();
  // let path = location.pathname.toString().slice(1);

  return (
    <>
    {location &&
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={2}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="start">
        {/* <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
     */}
         <Link  m={-3}
                p={3}to="/">
                  <Box size='sm'>
                    <Image width='250px' src={BharatSimLogo}></Image>
                  </Box>
                </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >

          { location.pathname.toString()==='/' ?
          <MenuItem to="/" flag={'current_tab'}> Home</MenuItem> 
          : <><MenuItem to="/" flag={''}>  Home</MenuItem></> 
        }
          {/* <MenuItem to="/about">About </MenuItem> */}

          { (location.pathname.toString()==='/components' || location.pathname.toString()==='/simulation_engine' || location.pathname.toString()==='/viz_engine' || location.pathname.toString()==='/synthetic_population') ?
          <MenuItem to="/components" flag={'current_tab'}> Components </MenuItem> :
          <><MenuItem to="/components" flag={''}> Components </MenuItem></>
          }

          {/* <MenuItem to="/collaborations"> Collaborations </MenuItem> */}
          <MenuItem to="/publications"> Publications </MenuItem> 

          { location.pathname.toString()==='/people' ?
          <MenuItem to="/people" flag={'current_tab'}> People </MenuItem>
           : <MenuItem to="/people" flag={''}> People </MenuItem>
        } 

          {/* <MenuItem to="/media"> Media </MenuItem> */}
          {/* <MenuItem to="/"> FAQ </MenuItem> */}
          <MenuItemUrl to="https://documentation.com" isLast>
          {/* <ButtonDoc></ButtonDoc> */}
          {/* 363c46 alt button color */}
          <a href='https://bharatsim.readthedocs.io' target="_blank">
            <Button
              size="md"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["#2D3748", "#2D3748", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.600", "primary.100", "primary.600", "primary.600"]
              }}
              onClick={()=> window.open("https://bharatsim.readthedocs.io", "_blank")}
            >
                    Documentation
            </Button></a>

          </MenuItemUrl>
        </Flex>
      </Box>
    </Flex>
  }
  </>
  );
};

export default Header;
