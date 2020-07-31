import styled from '@emotion/styled'
import {rem} from 'polished'
import Link from 'next/link'

function Header({isDark}){
    return(
        <HeaderStyled isDark={isDark}>
                <div className="header">
                    <div className="header_name">
                        <Link href="/"><a>JOHN OUTWATER</a></Link>
                    </div>
                    {/* <div className="header_work"></div> */}
                    <div className="dropdown">
                    <button className="dropbtn">WORK</button>
                    <div className="dropdown-content">
                        <a href="/">Data Visualization</a>
                        <a href="/gis">GIS</a>
                        <a href="/imagery">Imagery</a>
                    </div>
                    </div>
                    <div className="header_info">INFO</div>
                </div>

        </HeaderStyled>

    )
}

const HeaderStyled = styled.header`
a{
text-decoration: none;
}

/* unvisited link */
a:link {
  color: black;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: black;
}

/* selected link */
a:active {
  color: black;
}


background: ${props => props.theme.colors.primary};
background: ${props => props.isDark ? "#000000" : "#efefef"};


.header {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    ///////
    display: block;
    /* align-items: center; */
    color: #333333;
    font-family: 'HelveticaNeue-Thin';
    font-size: ${rem(14)};

    .header_name{
        align-items: left;
        margin-left: 0px;
    }

    .header_work{
        margin-top: -16px;
        margin-right: 10.5rem;
        flex: 1;
        text-align: right;
    }

    .header_info{
        margin-top: -16px;
        flex: 1;
        text-align : right;
    }

    /* Dropdown Button */
    .dropbtn {
    padding-bottom: 16px;
    border: none;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
    /* position: relative;
    display: inline-block; */
    margin-top: -16px;
    margin-right: 6.5rem;
    flex: 1;
    text-align: right;
    float: right;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
    }

    /* Links inside the dropdown */
    .dropdown-content a {
    color: black;
    padding: 12px 8px;
    text-decoration: none;
    display: block;
    text-align: left;
    
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #ddd;}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}

    
}

`

export default Header;