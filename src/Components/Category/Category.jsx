import React from 'react'
import './Category.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams,useNavigate ,Link} from 'react-router-dom'

export const Category = ({handleAddProduct}) => {
// const getItems=productItems.filter(proitem=>proitem.category==category && proitem) 

const navigate=useNavigate();
const [items,setItems]=useState();
const params=useParams()
useEffect(() => {
  axios.get("http://localhost:4042/Category")
  .then(response=>{setItems(response.data);
    // console.log(response.data)
})
}, [params])

  return (
    <>
      
       <div className='container'>

            {items && items.map((categoryItem)=>(
                <div key={categoryItem.id} className='procard'>
                    
                    <div>
                        <img className='product-image' onClick={()=>navigate(`/category/${categoryItem.name}`)} src={categoryItem.image} alt={categoryItem.name}/>
                    </div>
                   
                    <div>
                        <h3 className='product-info'> {categoryItem.name} </h3>
                   </div>
                </div>
            ))}
       </div>
    </>
  )
}













































































































































// import React from 'react'
// // import Header from '../../Common/Header/Header'
// import Login from '../../Pages/Login/Login'
// import './Category.css'

// import { Link } from 'react-router-dom'

// export const Category = () => {

//     return (
//         <>
//             <div className='container'>
//                 <div className='procard'>
//                     <div className='product-image'>
//                         <Link to='/JewelCategory'>
//                             <img src='./Assets/ProductCategory/Jewels/JewelsMain.jpg' alt='' />
//                             <div className='product-info'>
//                                 <h3> Jewels </h3>
//                             </div> </Link>
//                     </div>
//                 </div>

//                 <div className='procard'>
//                     <div className='product-image'>
//                         <Link to='/MobileCategory'>
//                             <img src='./Assets/ProductCategory/Mobiles/MobilesMain.jpg' alt='' />
//                             <div className='product-info'>
//                                 <h3> Mobiles </h3>
//                             </div>  </Link>
//                     </div>
//                 </div>

//                 <div className='procard'>
//                     <div className='product-image'>
//                         <Link to='/ShoeCategory'>
//                             <img src='./Assets/ProductCategory/Shoes/ShoesMain.jpg' alt='' />
//                             <div className='product-info'>
//                                 <h3> Shoes </h3>
//                             </div>  </Link>
//                     </div>
//                 </div>

//                 <div className='procard'>
//                     <div className='product-image'>
//                         <Link to='/DressCategory'>
//                             <img src='./Assets/ProductCategory/Dresses/DressesMain.jpg' alt='' />
//                             <div className='product-info'>
//                                 <h3> Dresses </h3>
//                             </div> </Link>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }


