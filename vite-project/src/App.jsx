import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';

function Home(){
  return <h1>Home Page</h1>;
}
function Products(){
  return(
    <div>
      <h1>Products Page</h1>
      <nav style={{display:'flex',gap:'1rem'}}>
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
function FeaturedProducts(){
  return(   
    <div> 
  <h1>Featured Products </h1>;
    <ul>
    <li>Phone</li>
    <li>Laptop</li>
    </ul>
   </div>
  );
}

function NewProducts(){
  return(   
    <div> 
      <h1>New Products</h1>;
  <h1>Featured Products </h1>;
    <ul>
    <li>Phone</li>
    <li>Laptop</li>
    </ul>
   </div>
  );
}
function Contact() { 
  return <h1>Contact Page</h1>; 
} 

 function App() {
  return (
    
   
      <BrowserRouter>
        <nav style={{display:'flex',gap:'1rem'}}>
         <Link to="/">Home</Link> |{" "} 
          <Link to="/products">Products</Link>|{" "}
          <Link to="/contact">Contact</Link> 
          
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products/>}>
          <Route path="Featured" element={<FeaturedProducts/>}/>
          <Route path="New" element={<NewProducts/>}/>
        </Route>
           <Route path="/contact" element={<Contact />} /> 
      </Routes>
       </BrowserRouter>
        
    
  );
}
export default App;