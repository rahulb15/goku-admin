import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./creators.scss";
import Header from "../../../common-components/header/header";
import IdoLeftBar from "../marketplace-leftbar/marketplace-leftbar";
import { FaFilter } from "react-icons/fa";
import CreatorTable from "./creator-table";
// import Pagination from "../../../common-components/pagination/pagination"
//import { useSelector, useDispatch } from "react-redux";
//import { filterSerachCreator } from "../../../../redux/get-creators/getcreators.action";
//import { fetchAllCreators } from "../../../../redux/get-creators/getcreators.action";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import useTitle from "../../../../hooks/useTitle";
import Axios from "axios";

const IdoBuyers = () => {
  useTitle("Marketplace");
  const [creator, setCreator] = useState([]);
  const [userName, setUserName] = useState("");
  //   const [paginationNo, setPaginationNo] = useState(pageNo);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");

  var getCreators = async () => {
    const accessJWT = localStorage.getItem("accessAdminJWT");
    Axios.get(
      "/creator?page=" + page + "&limit=" + limit,
      {
        headers: {
          Authorization: accessJWT,
        },
        params: {
          search: search,
        },
      }
    )
      .then((response) => {
        if (response.data.status == "success") {
          console.log("colec", response);
          setCreator(response.data.adminUser[0].paginatedResults);
          const total = response.data.adminUser[0].totalCount / limit;
          setTotalPage(Math.ceil(total));
          // setCreator(response.data.creator)
          // setWalletAddress(response.data.creator.walletAddress.slice(0,9))
        }

        console.log("responasa", response);
      })
      .catch((error) => {
        console.log("error2", error);
      });
  };

  console.log("creator", creator);

  function decreasePage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function increasePage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  useEffect(() => {
    getCreators();
  }, [page, search]);

  console.log("page", page);
  return (
    <div className="bashBg">
      <Header />
      <IdoLeftBar />
      <div className="buyerFilter">
        <div className="buyersHd">Creators</div>
        <div className="buyersFlt">
          <FormGroup className="fltrInp">
            <Input
              type="text"
              name="userName"
              value={search}
              onChange={handleChanges}
              id="exampleEmail"
              placeholder="Search user..."
            />
          </FormGroup>
          <Button className="fltrBtn" onClick={getCreators}>
            <FaFilter />
          </Button>
        </div>
      </div>
      <div className="idoTable">
        <CreatorTable creators={creator} />
      </div>
      <div className="paginationBx">
        <Pagination aria-label="Page navigation example">
          <PaginationItem onClick={() => decreasePage()}>
            <PaginationLink className="nextBtn" href="#">
              Pre
            </PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => decreasePage()}>
            <PaginationLink href="#" className="active">
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => increasePage()}>
            <PaginationLink href="#">{page + 1}</PaginationLink>
          </PaginationItem>

          <PaginationItem onClick={() => increasePage()}>
            <PaginationLink className="nextBtn" href="#">
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>

      {/* <div className='paginationBx'>
            <Pagination aria-label="Page navigation example">
            {pageNo==1 ?<PaginationItem disabled>
            <PaginationLink className='nextBtn' href="#" onClick={reducePage}>
                Pre
            </PaginationLink>
            </PaginationItem>:<PaginationItem > 
            <PaginationLink className='nextBtn' href="#" onClick={reducePage}>
                Pre
            </PaginationLink>
            </PaginationItem>}
            {pageArray?pageArray.map((data)=>{
              return(
  
                
                pageNo==data? <PaginationItem active>
                     <PaginationLink href="#" onClick={()=>pageNoClick(data)}>
                  {data}
                </PaginationLink>
              </PaginationItem>:<PaginationItem>
                <PaginationLink href="#" onClick={()=>pageNoClick(data)}>
                  {data}
                </PaginationLink>
              </PaginationItem>
            
              )
            }):null}
      
       
        {pageNo==pageArray.length?<PaginationItem disabled>
            <PaginationLink className='nextBtn'  onClick={addPage}>
                Next
            </PaginationLink>
        </PaginationItem>:<PaginationItem>
            <PaginationLink className='nextBtn' onClick={addPage}>
                Next
            </PaginationLink>
        </PaginationItem>}
      </Pagination>
            </div> */}
    </div>
  );
};

export default IdoBuyers;
