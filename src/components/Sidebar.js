// components/Sidebar.js
import Category from "./category";
import PopularArticles from "./PopularArticles";
import Tags from "./Tags";
function Sidebar() {
    return (
      <div className="sidebar">
        <Category />
        <Tags />
        <PopularArticles />
      </div>
    );
  }
  
  export default Sidebar;
  