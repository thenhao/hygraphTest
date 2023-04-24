import './App.css';
import React, { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { request } from 'graphql-request';
import axios from 'axios';
import Card from './subcomponent/card';
import TitleHeaders from './subcomponent/titleheaders';

function App() {

  const [products, setProducts] = useState(null);
  const [items, setItems] = useState([]);
  const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { authors } = await request(
  //       'https://api-ap-northeast-1.hygraph.com/v2/clgorb6r36u9n01t35xvu32x7/master',
  //       `
  //     {
  //       authors {
  //         id
  //         name
  //       }
  //     }
  //   `
  //     );
  //     //console.log("graph ql request"+authors);
  //     setAuthors(authors);
  //     console.log(authors);
  //   };

  //   fetchProducts();
  // }, []);

//   useEffect(() => {
//     async function getAllProducts(){
//         axios.request({
//             url: `https://api-ap-south-1.hygraph.com/v2/cl6j7vhoe54xj01uq5g1qcgru/master` ,
//             method: 'POST',
//             data: {
//                 query: `{items{
//                     id
//                     itemName
//                     itemOverview
//                     itemPrice
//                     asset
//                     category
//                     createdAt
//                   }}`
//             },
//             headers: {
//                 'content-type': 'application/json',
//             }
//         }).then((res) => {
//             setItems(res.data.data.items)
//             console.log(res.data.data.items)
//         })
//     }

//     console.log("tutorial example"+items);
//     getAllProducts()
// }, []);

useEffect(() => {
  async function getAllAuthors(){
      axios.request({
          url: `https://api-ap-northeast-1.hygraph.com/v2/clgorb6r36u9n01t35xvu32x7/master` ,
          method: 'POST',
          data: {
              query: `{industryTopics {
                image {
                  id
                  fileName
                  handle
                  height
                  url
                }
                id
                title
                htmlTag
              }}`
          },
          headers: {
              //Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE5NzMwNTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5oeWdyYXBoLmNvbS92Mi9jbGdvcmI2cjM2dTluMDF0MzV4dnUzMng3L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJmYzQwYmYzYi1mNDk5LTRjMzctYjQ2ZS02YmZkYjJkMTk0NDAiLCJqdGkiOiJja2E1ajJlb2IwM3RjMDF3aDBkZmQ2N3J5In0.0QOPXWhixX-yvyoNB1pWPP1IqzsB_lK4xg-UwtA2GtbNFLqcDBpKP3zbgg4h7TXKA-DH3svcTS65PX-YNp6uGAhFHQ4ctl_cMFILM_Oyu8bIF31yJwoVCEdqjGAMITJQNOAwA7hqcMBII3_b_rS3oCXQE68z_1zNHKmxfZ4wBtBF2A3etOMSdzNzs1uOji-i-8Wsoty2zrknW-X478UoCW7TeXF8ERM0PiA617Co0jwkDG3FrjQnBAKk9hLiOuQlKpseVEk6aRUtssP47FfD-Vp7oiN_i1aaoursH_pluz-8gtZktJQgNWQf_BGAmkdyrg_cLTY1-KPJSs4DOLdnlqTPYWLud72v_OLkSTXENCik8x0HktaWZYpJwGkNQZkFMg60uEJ2m0mNZPrgQ3wDf_Lt1bqiDY7iXR9b-rCdpHiD4F-9TFdZZZGKG8dw4blWSwwLgFakq4ABDTgR_FJZRJ-MlO5W4zQm8Q-BkTV7e4o75WQnj9HxHOHI2kwpoeb0BciPdNbAtEGX59p3_cqZG2tT7A3d9O_BI-beB46hHT9EJ7iaUttmLA5FGYJbEH_W-tlCWHQPVhP0ZM6wOJZ_kb1DoVbwBal5VKKTcN12U95C54DiOzF0sZJA2sAhe8va6Z03bHmMBl3xBCJMatShgJeWzJAAy2UESqJ3j8sFDMI' }`,
              'content-type': 'application/json',
          }
      }).then((res) => {
          //console.log(res.data.data.industryTopics);
          setAuthors(res.data.data.industryTopics);
          //console.log(res.data.data.industryTopics);
      })
  }

  //console.log("Trying own example"+authors);
  getAllAuthors()
}, [])

  return (
    <div className="App">
        Test Hygraph
        {/* App here to house the main page */}
        {/* sub app to house the cards and the plus and minus button*/}
        <TitleHeaders titles={authors} />
    </div>
  );
}

export default App;
