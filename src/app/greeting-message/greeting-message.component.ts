import { Component } from '@angular/core';

@Component({
selector:'greeting-message',
//templateUrl:'./greeting-message.component.html',
template:`
<br>
<h1>
{{Hi}} World
</h1>
`,
styles:[`
h1{
color:aqua;
background-color:black;
text-align:center;
padding:5px;
}
`
]
//styleUrls:['./greeting-message.component.css']


})

export class GreetingMessage{

 Hi = "Hello Wonderful";
    
}