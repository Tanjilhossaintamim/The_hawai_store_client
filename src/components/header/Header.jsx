import React, { useEffect, useState, useRef } from "react";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import logo from "../../assets/ezgif.com-gif-maker.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "./header.scss";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/loginSlice";
import { fetchSearchProduct } from "../../redux/searchProductSlice";
import { FcMenu } from "react-icons/fc";

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);
  const { collections } = useSelector((state) => state.collections);
  const navigate = useNavigate();
  const location = useLocation();
  const [divclass, setDivclass] = useState("");
  const [toggleClass, setToggleClass] = useState("");
  const [searchvalue, setSerchValue] = useState("");
  const handelInputChange = (e) => {
    setSerchValue((prev) => (prev = e.target.value));
  };
  const searchProduct = (e) => {
    if (e.key == "Enter") {
      // dispatch(fetchSearchProduct(searchvalue));
      if (searchvalue != "") {
        navigate("/product/search/" + searchvalue);
        setSerchValue("");
        setToggleClass("");
      }
    }
  };

  const handelSearchProductWithButton = () => {
    if (searchvalue != "") {
      navigate("/product/search/" + searchvalue);
    }
  };

  const userLogout = () => {
    dispatch(logout());
    setDivclass("");
    setToggleClass("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="headerWrapper">
      <ContentWrapper>
        {/* for mobilemenu */}
        <div className="mobilenavbar">
          <div className="mleft">
            <span
              onClick={() => setToggleClass(toggleClass ? "" : "showtogglenav")}
              style={{ cursor: "pointer" }}
            >
              <FcMenu />
            </span>
          </div>
          <div className="mmiddle" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className="mright">
            <span
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <RiShoppingCart2Line />
            </span>
          </div>
        </div>

        {/* toggle nav for moblie */}

        <div className={`togglenavwrapper ${toggleClass}`}>
          <div className="togglenav">
            <div className="searchbox">
              <div className="box">
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchvalue}
                  onChange={handelInputChange}
                  onKeyDown={searchProduct}
                />
                <div onClick={handelSearchProductWithButton}>
                  <AiOutlineSearch />
                </div>
              </div>

              {/* catagory  */}
              <div className="collections">
                {collections != null &&
                  collections?.map((item) => (
                    <div
                      className="collection"
                      key={item.id}
                      onClick={() => {
                        navigate(`/products/collection_id=/${item.id}`);
                        setToggleClass("");
                      }}
                    >
                      {item.title}
                    </div>
                  ))}
              </div>
              <div className="account-link">
                {token ? (
                  <>
                    <div
                      onClick={() => {
                        navigate("/myorder");
                        setToggleClass("");
                      }}
                    >
                      My Orders
                    </div>
                    <div onClick={userLogout}>Logout</div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        navigate("/login");
                        setToggleClass("");
                      }}
                    >
                      Login
                    </div>
                    <div
                      onClick={() => {
                        navigate("/signup");
                        setToggleClass("");
                      }}
                    >
                      Register
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ......................... */}
        <div className="navbar">
          <div className="leftside">
            <span className="s1">
              Your purchase supports the education of student
            </span>
            <br />
            <span>employees at the Polynesian Cultural Center</span>
          </div>
          <div className="middle">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="rightside">
            <div className="account">
              <div className="myaccount">
                <div
                  className="dashbord"
                  onClick={() => setDivclass(divclass ? "" : "mydivclass")}
                >
                  <span className="myac" id="myac">
                    My Account
                  </span>
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
                <span className="bar"></span>
                <div className="cart" onClick={() => navigate("/cart")}>
                  <span>
                    <RiShoppingCart2Line />
                  </span>
                  Shoping Cart
                </div>
              </div>
              <div className={`maindiv ${divclass}`} id="div">
                <div className="accountdashbord">
                  {token ? (
                    <>
                      <span
                        onClick={() => {
                          navigate("/myorder");
                          setDivclass("");
                        }}
                      >
                        My Orders
                      </span>
                      <span onClick={userLogout}>Logout</span>
                    </>
                  ) : (
                    <>
                      <span
                        onClick={() => {
                          navigate("/login");
                          setDivclass("");
                        }}
                      >
                        Login
                      </span>
                      <span
                        onClick={() => {
                          navigate("/signup");
                          setDivclass("");
                        }}
                      >
                        Register
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="search">
              <div className="box">
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchvalue}
                  onChange={handelInputChange}
                  onKeyDown={searchProduct}
                />
                <div onClick={handelSearchProductWithButton}>
                  <AiOutlineSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <div className="catagorywrapper">
        <ContentWrapper>
          <div className="collections">
            {collections != null &&
              collections?.map((item) => (
                <div
                  className="collection"
                  key={item.id}
                  onClick={() =>
                    navigate(`/products/collection_id=/${item.id}`)
                  }
                >
                  {item.title}
                </div>
              ))}
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Header;
