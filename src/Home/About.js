import React, { Component } from 'react';
import '.././App.css';
class About extends Component {
  render() {
      
    return (
        <section id="about">
            <div className="about-header"><h1>Our Story</h1></div>
            <div className="about-shop">
                <img id="about-shop-img" className="about-img" src={require(".././images/facebook-pic.png")} alt="Images of Action Tattoo's front desk"/>
                <p id="about-shop-text" className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi quidem ut, omnis veniam possimus placeat quaerat, ducimus totam assumenda deserunt? Nobis cum iusto ea saepe, harum provident facilis modi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam facilis rem omnis est vero veritatis, ratione quis enim sit magni, optio cum hic? Tempora quod sed unde, optio repellendus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, minus est delectus, doloremque nobis suscipit totam porro voluptatem doloribus labore, et quidem incidunt sit vero quia corporis tempora ab.</p>
            </div>
            <div className="about-owner">
                <img id="about-owner-img" className="about-img" src={require(".././images/owner.jpg")} alt="Image of Action Tattoo's owner"/>
                <p id="about-owner-text" className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus, in aperiam saepe provident qui numquam autem perspiciatis non ullam neque, architecto, at aliquam sapiente. Voluptate quas labore qui error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima mollitia vitae minus quam sequi corporis magni eum, nulla saepe id nemo aperiam laudantium accusamus? Tempore quae corporis nobis dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eaque aliquid, laboriosam molestiae harum quae delectus similique ex totam id obcaecati impedit aut iusto ad expedita cupiditate provident facilis rerum.</p>
            </div>
        </section>
    );
  }
}

export default About;
