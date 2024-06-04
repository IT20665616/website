import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import logo from './../assets/img/logo.png';
import Footer from './Footer';


function Header() {
    return (
        <>
            <header id="header" class="header d-flex align-items-center fixed-top">
                <div class="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="/" class="logo d-flex align-items-center me-auto">
                        <img src={logo} alt="" />
                        <h1 class="sitename">MeloWave</h1>
                    </a>

                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="/" class="">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#features">Milestones</a></li>
                            <li class="dropdown"><a href="/docs"><span>Downloads</span></a>
                   
                            </li>
                            <li class="dropdown"><a href="#"><span>Project Scope</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Literiture Survey</a></li>
                                    <li><a href="#">Research Gap</a></li>
                                    <li><a href="#">Research Problem</a></li>
                                    <li><a href="#">Research Objectives</a></li>
                                    <li><a href="#">Methodology</a></li>
                                    <li><a href="#">Tools and Technologies</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a class="btn-getstarted" href="index.html#about">Contact Us</a>

                </div>
            </header>

        </>
    );
}

export default Header;
