import React from 'react';
import Section from './section/index';
import Article from './section/article/index';
import Btn from '../general/button/index';
import mapValues from 'lodash';


const Main = props => {
    console.log('props.moviesCameOut');
    console.log(props.moviesCameOut);
    return (
    <main>
        <section className="begin" >
            <div style={{ backgroundImage : "url('https://www.sho.com/site/image-bin/images/0_0_3453707/0_0_3453707_02_1024x640.jpg')"}}>
					<h1>Киноподбор <span className="red">Гомель</span></h1>
					<h2>Регистрируйся и не пропусти выход фильма</h2>
				<div className="wrapper_button">
                    <Btn classBtn="registr_btn" text="Регистрация" icon="fa-user-plus" />
                </div>
			</div>
        </section>
        <Section id="process" title="Идут">
        {
            props.moviesCameOut.map((movie, index) => 
            ( <Article 
                key = {index}
                id={movie.id}
                classArt="movies"
                title={ movie.title }
                urlImg={ movie.img }
            >
                <div className="rating__rectangle"></div><span className="rating">{ movie.raiting }</span>
            </Article>
            ))
        }
        </Section>
        <Section id="soon" title="Скоро">
        {    
            props.moviesSoon.map((movie, index) => 
            ( <Article 
                key = {index}
                id={movie.id}
                classArt="movies"
                title={ movie.title }
                urlImg={ movie.img }
            >
                <span className="rating day">1 день <i className="fa fa-clock-o" aria-hidden="true"></i></span>
            </Article>
            ))
        }
        </Section>
        <Section title="Карта">
            <div id="map">
                
            </div>
        </Section>
    </main>
)};

export default Main;