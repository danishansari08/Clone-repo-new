import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function All() {
  return <h1>Home Page</h1>;
}
function AmazonPay() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/AmazonPay/featured">Featured</Link>
        <Link to="/AmazonPay/new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}
function FeaturedProducts() {
  return (
    <div>
      <h1>Featured Products </h1>;
      <ul>
        <li>Phone</li>
        <li>Laptop</li>
      </ul>
    </div>
  );
}

function NewProducts() {
  return (
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
function Mobiles() {
    return ( 
    <div> 
      <h1>Products Page</h1> 
      <nav style={{ display: 'flex', gap: '10px' }}> 
        <Link to="/products/car">Electronics</Link> |{" "} 
         <Link to="/Mobiles/Mobiles & Accessories">Mobiles & Accessories</Link> |{" "} 
          <Link to="/products/car">Laptop & Accessories</Link> |{" "} 
           <Link to="/products/car">TV & Home Entertainment</Link> |{" "} 
            <Link to="/products/car">Audio</Link> |{" "} 
             <Link to="/products/car">Cameras</Link> |{" "} 
              <Link to="/products/car">Computer Pheripherals</Link> |{" "} 
               <Link to="/products/car">Smart Technology</Link> |{" "} 
                <Link to="/products/car">Music Instruments</Link> |{" "} 
        <Link to="/products/bike">Office & Stationary</Link> 
      </nav>  
      <Outlet />  
    </div> 
  ); 
}
function Mobile() {
  return (
    <div>
      <ul>
        <li>Phone</li>
        <li>Laptop</li>
        <li> Case & Cover</li>
        <li>screen Gourds</li>
         <li> Power Bank </li>
          <li>Headsets </li>
           <li> Data Cable</li>
           <li> Chargers</li>
            <li>Selfie stick </li>
             <li> Lens Kit</li>
      </ul>
    </div>
  );
}

function Prime() {
  return <h1>Contact Page</h1>;
}

function TodayDeals() {
  return <h1>Contact Pages</h1>;
} //
function Coupens() {
  return <h1>Contact Pages</h1>;
}
function Flights() {
  return <h1>Contact Pages</h1>;
}
function Fresh() {
  return <h1>Contact Pages</h1>;
}
function GroceryGourmentsFoots() {
  return <h1>Contact Pages</h1>;
}
function Electronics() {
  return <h1>Contact Pages</h1>;
}
function New() {
  return <h1>Contact Pages</h1>;
}
function Releases() {
  return <h1>Contact Pages</h1>;
}
function BestSellers() {
  return <h1>Contact Pages</h1>;
}
function Fashion() {
  return <h1>Contact Pages</h1>;
}
function Computers() {
  return <h1>Contact Pages</h1>;
}
function CustomProducts() {
  return <h1>Contact Pages123</h1>;
}

function App() {
  return (


    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">All</Link> |{" "}
        <Link to="/AmazonPay">AmazonPay</Link>| {" "}
        <Link to="/Mobiles">Mobiles</Link> | {" "}
        <Link to="/Prime">Prime</Link> |{" "}
        <Link to="/TodayDeals">TodayDeals</Link>| {" "}
        <Link to="/Coupens">Coupens</Link> |{" "}
        <Link to="/Flights">Flights</Link>|{" "}
        <Link to="/Fresh">Fresh</Link>|{" "}
        <Link to="/GroceryGourmentsFoots">GroceryGourmentsFoots</Link>|{" "}
        <Link to="/Electronics">Electronics</Link>|{" "}
        <Link to="/New">New</Link>|{" "}
        <Link to="/BestSellers">BestSellers</Link>|{" "}
        <Link to="/Fashion">Fashion</Link>|{" "}
        <Link to="/Computers">Computers</Link>|{" "}
        <Link to="/CustomProducts">CustomProducts</Link>


      </nav>

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="AmazonPay" element={<AmazonPay />}>
          <Route path="Featured" element={<FeaturedProducts />} />
          <Route path="New" element={<NewProducts />} />
        </Route>
        <Route path="/Mobiles" element={<Mobiles />} >
           <Route path="Mobiles & Accessories" element={<Mobile />} />
         </Route>
        <Route path="/Prime" element={<Prime />} />
        <Route path="/TodayDeals" element={<TodayDeals />} />
        <Route path="/Coupens" element={<Coupens />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Fresh" element={<Fresh />} />
        <Route path="/GroceryGourmentsFoots" element={<GroceryGourmentsFoots />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/BestSellers" element={<BestSellers />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Computers" element={<Computers />} />
        <Route path="/CustomProducts" element={<CustomProducts />} />
      </Routes>
    </BrowserRouter>


  );
}
export default App;