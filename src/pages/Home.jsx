import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Search} from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFiltered(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate({
            pathname: location.pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            location.search ?
                setFiltered(data.categories.filter(item => item.strCategory.toLowerCase().includes(location.search.split("=")[1]))) :
                setFiltered(data.categories);

        })
    },[location.search])

    return <>
        <Search cb={handleSearch} firstValue={location.search.split("=")[1]}/>
        {!catalog.length ? <Preloader /> : (
            <CategoryList catalog={filtered} />
        )}
    </>
}

export default Home;