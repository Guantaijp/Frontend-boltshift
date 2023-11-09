import Footer from "../Footer"
import Navbar from "../Navbar"
import CatalogCard from "./CatalogCard"
import Searchbar from "./Searchbar"
import Sections from "./Sections"



function MainCatalog() {
   return (
      <>
      <div style={{
          maxWidth: "1248px" ,
          justifyContent: "center",
          alignItems: "center",

      }}>
        <Navbar />
         <Searchbar />
         <div className="flex">
            <div
                className="xs:hidden sm:hidden"
               style={{
                   width: "352px" ,
                   marginLeft: "32px",

            }}>
                <Sections />
            </div>
            <div className=" mx-4 my-4">
            <CatalogCard />
           </div>
         </div>
         <Footer />
      </div>
      </>
   )
}

export default MainCatalog
