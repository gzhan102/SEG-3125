import {Outlet, Link} from 'react-router-dom'
import $ from 'jquery'
import './Layout.css'

function Layout() {
    return (
        <div class="container-fluid d-flex justify-content-start">
            <nav id="navbar" class="navbar bg-dark align-items-start">
                <ul class="navbar-nav">
                    <li id="test" class="nav-item">
                        <Link to="/" class="nav-link">Home</Link> 
                    </li>
                    <li class="nav-item">
                        <Link to="/Course" class="nav-link">Course</Link> 
                    </li>
                    <li class="nav-item">
                        <Link to="/Pay" class="nav-link">Pay</Link> 
                    </li>
                </ul>
            </nav>
            <div>
                <button id="menu-btn" class="btn">
                    <i class="fas fa-bars"></i>
                </button>
                <div className="container d-flex flex-column">
                    <h1>E-education</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

$(function() {
    var navIsShow = true
    $('#menu-btn').click(function() {
        if (navIsShow) {
            $('#navbar').removeClass('navbar')
            $('#navbar').css('width', 0)
            $('#navbar .navbar-nav').css('display', 'none')
        } else {
            $('#navbar').addClass('navbar')
            $('#navbar').css('width', '20%')
            setTimeout(function() {
                $('#navbar .navbar-nav').css('display', 'flex')
            }, 250)
        }
        navIsShow = !navIsShow
    })
})

export default Layout