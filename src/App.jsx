import React, { Component } from 'react';
import hero from "./assets/hero.png";
import '../css/style.min.css';
export default class App extends Component {
  render() {
    return (
      <div>
      <header className='header'>
          <div className="container">
            <ul className="header_list">
              <li><a href="#"><b>Works</b></a></li>
              <li><a href="#"><b>Blog</b></a></li>
              <li><a href="#"><b>Contact</b></a></li>
            </ul>
            <aside className='header_res'>
            <i className="fa-solid fa-bars fa-lg"></i>
            </aside>
          </div>
      </header>
      <section className='hero'>
        <div className="container">
          <div className="hero_wrapper">
            <div className="hero_left">
              <h1>Hi, I am John,
Creative Technologist</h1>
<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<button>Download Resume</button>
            </div>
            <div className="hero_right">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='info'>
        <div className="container">
          <h3 className="info_title">Recent Posts</h3>
          <div className="info_wrapper">
            <div className="info_card_f">
                  <h2><b>Making a design system from scratch</b></h2>
                  <span>12 Feb 2020   |    Design, Pattern</span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="info_card_s">
            <h2><b>Creating pixel perfect icons in Figma</b></h2>
                  <span>12 Feb 2020   |    Design, Pattern</span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='works'>
        <div className="container">
          <h3 className='works_title'>Featured Works</h3>
          <div className="works_wrapper">
            <div className="works_card">
                <h2>Designing Dashboards</h2>
                <p>Dashboard</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="works_card">
            <h2>Vibrant Portraits of 2020</h2>
                <p>Illustration</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="works_card">
            <h2>36 Days of Malayalam type</h2>
                <p>Typography</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
