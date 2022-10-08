import * as React from 'react';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { Container, Box } from '@mui/system';
import { Card, CardContent, CardMedia, Tooltip, Chip } from '@mui/material';
import { AppBar, Toolbar, Grid, TextField, Typography, Button } from '@mui/material';




import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


// import React, { Component } from "react";
import Slider from "react-slick";


// import { MenuItem, Divider } from "@mui/material";
// import { Card, CardContent, CardMedia, Tooltip } from '@mui/material';

export default function HeaderAndBody() {


  // For Categories Slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };


  const [productList, setProductList] = useState([

    { "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "minorder": 1, "rating": { "rate": 3.9, "count": 120 } },
    { "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "minorder": 1, "rating": { "rate": 4.1, "count": 259 } },
    { "id": 3, "title": "Mens Cotton Jacket", "price": 55.99, "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "minorder": 1, "rating": { "rate": 4.7, "count": 500 } },
    { "id": 4, "title": "Mens Casual Slim Fit", "price": 15.99, "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", "minorder": 1, "rating": { "rate": 2.1, "count": 430 } },
    { "id": 5, "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "price": 695, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "minorder": 1, "rating": { "rate": 4.6, "count": 400 } },
    { "id": 6, "title": "Solid Gold Petite Micropave ", "price": 168, "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "minorder": 1, "rating": { "rate": 3.9, "count": 70 } },
    { "id": 7, "title": "White Gold Plated Princess", "price": 9.99, "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", "category": "jewelery", "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "minorder": 2, "rating": { "rate": 3, "count": 400 } },
    { "id": 8, "title": "Pierced Owl Rose Gold Plated Stainless Steel Double", "price": 10.99, "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", "category": "jewelery", "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "minorder": 1, "rating": { "rate": 1.9, "count": 100 } },
    { "id": 9, "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", "price": 64, "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "category": "electronics", "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "minorder": 1, "rating": { "rate": 3.3, "count": 203 } },
    { "id": 10, "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "price": 109, "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics", "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "minorder": 1, "rating": { "rate": 2.9, "count": 470 } },
    { "id": 11, "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "price": 109, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "category": "electronics", "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "minorder": 1, "rating": { "rate": 4.8, "count": 319 } },
    { "id": 12, "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "price": 114, "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "category": "electronics", "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "minorder": 1, "rating": { "rate": 4.8, "count": 400 } },
    { "id": 13, "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "price": 599, "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "category": "electronics", "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "minorder": 1, "rating": { "rate": 2.9, "count": 250 } },
    { "id": 14, "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", "price": 999.99, "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "category": "electronics", "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "minorder": 1, "rating": { "rate": 2.2, "count": 140 } },
    { "id": 15, "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", "price": 56.99, "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", "minorder": 1, "rating": { "rate": 2.6, "count": 235 } },
    { "id": 16, "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", "price": 29.95, "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON", "category": "women's clothing", "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg", "minorder": 2, "rating": { "rate": 2.9, "count": 340 } },
    { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "minorder": 1, "rating": { "rate": 3.8, "count": 679 } },
    { "id": 18, "title": "MBJ Women's Solid Short Sleeve Boat Neck V ", "price": 9.85, "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", "minorder": 2, "rating": { "rate": 4.7, "count": 130 } },
    { "id": 19, "title": "Opna Women's Short Sleeve Moisture", "price": 7.95, "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", "minorder": 1, "rating": { "rate": 4.5, "count": 146 } },
    { "id": 20, "title": "DANVOUY Womens T Shirt Casual Cotton Short", "price": 12.99, "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "minorder": 1, "rating": { "rate": 3.6, "count": 145 } }

  ]);
  const [allCategories, setAllCategories] = useState([]);
  const [filterList, setFilterList] = useState([]);
  let [selectedCategoryArr, setSelectedCategoryArr] = useState([]);


  // Extract Unique categories from main product Array
  let getCategories = () => {
    let li = productList.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  let selectBtn = (val) => {
    let arr = [...selectedCategoryArr];
    arr.push(val);
    arr = [...new Set([...arr])];

    let arr2 = [];

    arr.forEach((y) => {
      arr2 = [...arr2, ...productList.filter((x) => x.category == y)];
    });

    setFilterList([...arr2]);
    setSelectedCategoryArr([...arr]);
  };

  let removeCategory = (ind) => {
    selectedCategoryArr.splice(ind, 1);
    setSelectedCategoryArr([...selectedCategoryArr]);

    let arr2 = [];

    selectedCategoryArr.forEach((y) => {
      arr2 = [...arr2, ...productList.filter((x) => x.category == y)];
    });

    setFilterList([...arr2]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {/* -------------------------- Navigation Bar Starts -------------------------- */}
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#333333" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography mr={4} variant="h6" fontWeight="bold" sx={{ textDecoration: "underline" }} component="div">
            Products
          </Typography>
          <Typography variant="body1" component="div">
            Manufacturers
          </Typography>
        </Toolbar>


        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <Box>
            <img src={logo} width={180} />
          </Box>

          <Box sx={{ width: "50%" }}>
            <Paper
              component="form"
              sx={{ p: '0', display: 'flex', alignItems: 'center', width: "100%", border: "2px solid #FF6A00", borderRadius: "40px" }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="What are you looking for..."
                inputProps={{ 'aria-label': 'what are you looking for...' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <CameraAltOutlinedIcon />
              </IconButton>
              <Button variant="contained" sx={{ backgroundColor: "#FF6A00", borderRadius: "0 40px 40px 0", boxShadow: "none", padding: "10px 15px", '&:hover': { backgroundColor: "#de5c00" } }}><SearchIcon /> SEARCH</Button>
            </Paper>
          </Box>


          <Box sx={{ width: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography gutterBottom variant="caption" component="div">
              <IconButton>
                <PersonOutlineOutlinedIcon />
              </IconButton>
              Sign in<br />Join for free
            </Typography>
            <Typography gutterBottom variant="caption" component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <IconButton>
                <MessageOutlinedIcon />
              </IconButton>
              Messages
            </Typography>
            <Typography gutterBottom variant="caption" component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <IconButton>
                <MonetizationOnOutlinedIcon />
              </IconButton>
              Order
            </Typography>
            <Typography gutterBottom variant="caption" component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
              Cart
            </Typography>
          </Box>

        </Toolbar>

      </AppBar>
      {/* -------------------------- Navigation Bar Ends -------------------------- */}


      {/* -------------------------- Categories Slider -------------------------- */}
      <Toolbar>
        <section style={{ overflow: "hidden", height: "150px", width: "80%", margin: "0 auto" }}>
          <h2 style={{ margin: "10px auto", color: '#FF6A00' }}>Categories</h2>

          <Slider {...settings}>

            {selectedCategoryArr && selectedCategoryArr.length > 0
              ? selectedCategoryArr.map((x, i) => (
                <Chip
                  sx={{ width: "fit-content !important" }}
                  color={"primary"}
                  key={i}
                  onDelete={() => removeCategory(i)}
                  label={x}
                />
              ))
              : null}

          </Slider>

          <Slider {...settings}>

            {allCategories && allCategories.length > 0
              ? allCategories.map((e) => {
                return (
                  <>
                    <Button
                      onClick={() => selectBtn(e)}
                      value={e}
                      variant='contain'
                      sx={{ fontSize: 12 }} color="text.secondary"
                      key={e.id}>
                      {e}
                    </Button>
                  </>
                )
              })
              : null}

          </Slider>
        </section>
      </Toolbar>







      {/* Filtering All Cards by Categories */}
      <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", p: 2, pb: 5 }}>

        {filterList.map((e, i) => (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12} m={1}
            key={i}
          >
            <Chip sx={{ alignSelf: "center" }} label={e.category} />
            <Card
              sx={{ maxWidth: 290 }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={e.image}
                  width="100%"
                  alt={e.title}
                />
              </Box>
              <CardContent>
                <Tooltip title={e.title}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                      sx={{ height: 60, overflow: "hidden" }}
                      variant="subtitle1"
                    >
                      {e.title.slice(0, 43) + (e.title.length > 43 ? "..." : "")}
                    </Typography>
                  </Box>
                </Tooltip>

                <Typography gutterBottom variant="h6" component="div">
                  {`$ ${e.price}`}
                </Typography>

                <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                  {e.minorder} piece(s) • (min order)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* All Filtered Cards Ends*/}

      </Grid>


















      {/* Mapping All Cards */}
      <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", p: 2, pb: 5 }}>

        {productList.map((e, i) => (
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12} m={1}
            key={i}
          >
            <Card
              sx={{ maxWidth: 290 }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={e.image}
                  width="100%"
                  alt={e.title}
                />
              </Box>
              <CardContent>
                <Tooltip title={e.title}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                      sx={{ height: 60, overflow: "hidden" }}
                      variant="subtitle1"
                    >
                      {e.title.slice(0, 43) + (e.title.length > 43 ? "..." : "")}
                    </Typography>
                  </Box>
                </Tooltip>

                <Typography gutterBottom variant="h6" component="div">
                  {`$ ${e.price}`}
                </Typography>

                <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                  {e.minorder} piece(s) • (min order)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* All Cards Ends*/}

      </Grid>

    </>
  )
};