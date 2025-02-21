import React, { useEffect, useState } from 'react'
import Usertable from './Usertable'
import Newsapi from './Newsapi'
import Loader from './Loader'
import Productapi from './Productapi'
import Child2 from './Child2'

function Fetchdata(props) {
  const [color, setColor] = useState('tabes')
  const [newscolor, setnewsColor] = useState('tabes')
  const [prodectcolor, SetProdectcolor] =useState('tabes')
  const [userlist, setUserlist] = useState([])
  const [newslist, setNewslist] = useState([])
  const [productlist, setproductlist] = useState([])
  const [activetale, setActivetale] = useState('hidden')
  const [activenewstable, setActivenews] = useState('hidden')
  const [activeproducttable, setActivproduct] = useState('hidden')
   const [loaderSowHide,setLoaderSowHide] = useState('hidden')


  function usersData() {
    setColor('active-tabes');
    setnewsColor('tabes');
    SetProdectcolor('tabes')
    setActivenews('hidden')
    setActivproduct('hidden')
    setLoaderSowHide('block')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((Response) => {
      return Response.json()

    })
    .then((result) => {
      setUserlist(result)
      setActivetale('block')
      setLoaderSowHide('hidden')
    })
      }
      useEffect( ()=>{
       
        usersData();
      },[])

  function newsData() {

    setnewsColor('active-tabes');
    setColor('tabes');
    SetProdectcolor('tabes')
    setActivetale('hidden')
    setActivproduct('hidden')
    setLoaderSowHide('block')
   


    fetch('https://newsapi.org/v2/everything?q=india&from=2025-02-20&sortBy=publishedAt&apiKey=245d8c1448934875b7bf5158788d8cc7')
      .then((newsresult) => {

        return newsresult.json();
      })
      .then((newsres) => {
        setNewslist(newsres.articles)
        
        setActivenews('block')

      })


  }
  function productData() {
    SetProdectcolor('active-tabes')
    setColor('tabes')
    setnewsColor('tabes')
    setActivetale('hidden')
    setActivenews('hidden')
    setLoaderSowHide('hidden')
    
    fetch('https://dummyjson.com/products')
    .then((prductresult) => {

      return prductresult.json();
    })
    .then((prodectres) => {
      setproductlist(prodectres.products)
      
      setActivproduct('block')

    })
    console.log('hii')

  }
  return (
    <>
      <div className=' text-2xl h-[100px] flex w-full mt-3 gap-10 cursor-pointer'>
        <div className={color} onClick={usersData}>Users</div>
        <div className={newscolor} onClick={newsData}>News</div>
        <div className={prodectcolor} onClick={productData}>Product</div>
      </div>
      <Usertable UserData={userlist} activest={activetale}/>
      <Newsapi newsdatalate={newslist}  newsactive={activenewstable}/>
      <Productapi productdata={productlist} activeprodect={activeproducttable}/>
      <Loader loaders={loaderSowHide}/>
      <Child2 ctheme={props.ctheme} updatetheme={props.updatetheme}/>
     

     
   

    </>
  )
}

export default Fetchdata
