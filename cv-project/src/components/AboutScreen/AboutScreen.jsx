import React from "react";
import styleModule from './AboutScreenStyle.module.css'

export default function AboutScreen(props) {
    return (
        <div className="AboutScreen">
            <h1 className={`${styleModule.titleFontSize} ${styleModule.colorStyle}`} style={{color:props.palette.textColor}}>About Me</h1>
            <p className={styleModule.textStyle} style={{color:props.palette.textColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates, quam suscipit at nam delectus quidem possimus voluptatem. Rem a numquam obcaecati facere tempore harum perferendis eligendi quo, illo eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente suscipit excepturi repudiandae laudantium voluptatum eveniet animi, quas amet architecto quae rem expedita eaque velit, a id beatae aliquid saepe! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quo molestiae veritatis corrupti eius facilis natus odio repellendus, porro similique maiores distinctio qui iusto quod obcaecati incidunt magni ipsum modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur recusandae! Nemo sapiente nobis repudiandae et! Repellendus consequuntur, magni omnis dolores facere est expedita voluptates! Quos ab facere ipsam dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum inventore sunt repudiandae nemo quae sint consequatur! Saepe eligendi doloribus perspiciatis, voluptates, possimus, veritatis praesentium modi nulla ipsum culpa labore excepturi?</p>
        </div>
    );
}
