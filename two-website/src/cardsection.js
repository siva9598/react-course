import React from "react";
import Card from "./card"

const CardSection = ()=>(
<section class="contact bg-success ">
<div className="container ">
  <h2 className="text-white">
    We love new friends!
  </h2>
  <div className="row">
    <Card title = "Norway" content = "its a cold place"/>
    <Card title = "switzerland"/>
    <Card title = "hawaii"/>
    
  </div>
</div>
</section>);


export default CardSection;