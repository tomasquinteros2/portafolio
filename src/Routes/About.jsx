import React from 'react'

export const About = () => {
  return (
    <>
        <div className='backgroundDiv'></div>
        <div className='container'>
            <div className='content'>
                <h1 className='title'>About me</h1>
                <article className='article'>
                    <ul className="timeline">
                        <div className='lineAbout'></div>
                        <li>
                            <div className='circle'></div>
                            <a target="_blank"rel="noopener noreferrer"aria-label="Open Github Link"href="https://github.com/tomasquinteros2">
                                Web Developer{' '}
                            </a>
                            <a target="_blank" rel="noopener noreferrer" aria-label="Open Github Link" id="cardHover" href="https://github.com/tomasquinteros2"className="float-right">
                                View Github
                            </a>
                            <p className='text'>
                            I am currently finishing my university degree in Computer Application Development, where I have learned solid fundamentals 
                            in software development, web design and technologies such as HTML, CSS, JavaScript, Java and Scrum.
                            </p>
                        </li>
                        <li>
                            <div className='circle'></div>
                            <a target="_blank"rel="noopener noreferrer"aria-label="Open Github Link"href="https://github.com/tomasquinteros2/proyectGame-React">
                                React js{' '}
                            </a>
                            <a target="_blank" rel="noopener noreferrer" aria-label="Open Github Link" id="cardHover" href="https://github.com/tomasquinteros2/proyectGame-React"className="float-right">
                                View Github
                            </a>
                            <p className='text'>
                            I embarked on self-learning React.js, a library that fascinates me for its ability to create dynamic and efficient interfaces. This process has allowed me to develop solid skills in creating modern 
                            and functional applications.
                            </p>
                        </li>
                        <li>
                            <div className='circle'></div>
                            <a target="_blank"rel="noopener noreferrer"aria-label="Open Github Link"href="https://github.com/tomasquinteros2/react-api">
                                Node{' '}
                            </a>
                            <a target="_blank" rel="noopener noreferrer" aria-label="Open Github Link" id="cardHover" href="https://github.com/tomasquinteros2/react-api"className="float-right">
                                View Github
                            </a>
                            <p className='text'>
                            I have learned myself Node.js. This powerful technology has allowed me to delve into the creation of robust and scalable APIs.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    </>
  )
}
