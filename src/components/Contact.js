import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Contatos</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Me de uma oportunidade<br></br>
                <span className='amazing-color'>Que eu vou dar o meu melhor!</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>     
            <span className='footer'>Obrigado ❤ </span>
        </div>);
    }
}
 
export default Contact;