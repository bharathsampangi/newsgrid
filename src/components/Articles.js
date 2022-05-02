import React from "react";
import Ent1 from "../img/articles/ent1.jpg";
import Ent2 from "../img/articles/ent2.jpg";
import Tech1 from "../img/articles/tech1.jpg";
import Tech2 from "../img/articles/tech2.jpg";
import Sports1 from "../img/articles/sports1.jpg";

export default function Articles() {
    return (
        <section className="row articles">
            <h2>Editor Pics</h2>
            <div className="articles__list">
                <article className="article">
                    <img src={Ent1} alt="Entertainment 1" />
                    <div>
                        <span className="entertainment">entertainment</span>
                        <h3>Lorem ipsum dolor sit amen</h3>
                        <p>
                            Tempor laboris exercitation est laborum laborum excepteur eiusmod. Id enim laboris minim
                            cillum commodo reprehenderit tempor proident occaecat minim consequat ullamco. Eiusmod Lorem
                            incididunt laborum culpa mollit. Id quis ex amet reprehenderit et.
                        </p>
                    </div>
                </article>
                <div className="article article-dark">
                    <span className="sports">sports</span>
                    <h3>Lorem ipsum dolor sit amen</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                        molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                        est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu, tempus
                        elementum purus.
                    </p>
                </div>
                <div className="article">
                    <img src={Tech1} alt="Technology 1" />
                    <div>
                        <span className="tech">Technology</span>
                        <h3>Lorem ipsum dolor sit amen</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                            molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                            est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu,
                            tempus elementum purus.
                        </p>
                    </div>
                </div>
                <div className="article">
                    <span className="sports">sports</span>
                    <h3>Lorem ipsum dolor sit amen</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                        molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                        est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu, tempus
                        elementum purus.
                    </p>
                    <img src={Sports1} alt="Sports 1" />
                </div>
                <div className="article">
                    <img src={Tech2} alt="Technology 1" />
                    <div>
                        <span className="tech">Technology</span>
                        <h3>Lorem ipsum dolor sit amen</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                            molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                            est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu,
                            tempus elementum purus.
                        </p>
                    </div>
                </div>
                <div className="article article-primary">
                    <span className="sports">sports</span>
                    <h3>Lorem ipsum dolor sit amen</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                        molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                        est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu, tempus
                        elementum purus.
                    </p>
                </div>
                <div className="article">
                    <img src={Ent2} alt="Entertainment 2" />
                    <div>
                        <span className="entertainment">entertainment</span>
                        <h3>Lorem ipsum dolor sit amen</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non maximus mi. Sed sed arcu
                            molestie, dictum elit eu, pretium elit. Proin a condimentum augue, id euismod orci. Etiam mi
                            est, eleifend ac viverra a, porttitor non justo. Ut dolor ipsum, porta consequat nunc eu,
                            tempus elementum purus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
