// import Footer from "./components/Footer";
// import Products from "./components/products";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import Topselling from "./components/Topselling";
// import ProductPage from "./Product/[id]/page";
import Products from "./components/Products";



export default function Home() {
  return (
     <main>
      <Slide />
{/*        <ProductPage/> */}
      <Products />


       <Topselling />
       <Footer/>
     </main>
  );
}
