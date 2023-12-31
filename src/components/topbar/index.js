import {
    TopbarContainer,
    TopbarLeft,
    Logo,
    TopbarCenter,
    Input,
    SearchBar,
    TopbarRight,
    ResultBox,
    MaterialUISwitch,
    Profile,
} from "./style/topbar"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { useTheme, useUserAuth } from "../../context";
import { axiosInstance } from "../../utils/utils";
import SearchContainer from "../searchContainer";
const CancelToken = axios.CancelToken;
let source = CancelToken.source();
export default function Topbar() {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const {userProfile} = useUserAuth();
    const {isDarkMode, toggleTheme}  = useTheme()
    const search = async (e) => {
        setSearchInput(e)
        source && source.cancel('Operation canceled due to new request.');
        source = axios.CancelToken.source();
        try {
            let { data, status } = await axiosInstance.post('/users/search', { name: searchInput }, {
                cancelToken: source.token
            })
            if (status === 200) {
                setSearchResult(data.searchResult)
            }
            else {
                setSearchResult([])
            }
        } catch (err) {
            console.log(err)
        }
    }
    const toggleHandle =()=>toggleTheme();
    return (
        <TopbarContainer>
            <TopbarLeft>
                <Link to="/"  >
                    <Logo>ShareSpace</Logo>
                </Link>
            </TopbarLeft>

            <TopbarCenter>
                <SearchBar >
                    <Input
                        placeholder="Search for friend"
                        onChange={(e) => search(e.target.value)}
                        value={searchInput}
                        onFocus={() => setShowResult(true)}
                    />
                    <SearchIcon onClick={search} />
                </SearchBar>

                {searchInput.length > 0 &&
                 < ResultBox showresult={showResult} onClick={() => setShowResult("false")}>
                    {
                        searchResult
                            ? searchResult?.map((s) => (
                                <Link key={s._id} to={`/profile/${s._id}`}>
                                    <SearchContainer searchData={s} />
                                </Link>
                            ))
                            : <div style={{ textAlign: "center" }}> No result Found </div>
                    }
                </ResultBox>}
            </TopbarCenter>
            <TopbarRight>
                <MaterialUISwitch onChange={toggleHandle} checked={isDarkMode}/>
                <Link to={`/profile/${userProfile._id}`}>
                    <Profile src={userProfile.profilePicture} />
                </Link>
            </TopbarRight>
        </TopbarContainer>
    )
}
