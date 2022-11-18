import React from "react";
import HomeNavBar from "../HomePageNav/HomeNavBar";
import { HiHome } from 'react-icons/hi';
import { MdAddCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
const About = () => {
    return (
        <>
            <HomeNavBar />
            <div className="m-5">
                <div className="card bg-light">
                    <div className="card-body">

                        <div className="row ">
                            <div className="col-9">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                                of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                                of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                Sections 1.10.32
                                and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                                accompanied by English versions from the 1914 translation by H. Rackham.
                            </div>
                            <div className="col-3">
                                <center>
                                <img src="https://i0.wp.com/www.publicationcoach.com/wp-content/uploads/2019/01/19-01-21-JKRowling_Photo.jpg?fit=492%2C350&ssl=1" width="200px" alt="harry potter"  />
                                </center>
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-9">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                                Latin literature 
                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                 College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                  passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                   source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                                   (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
                                   of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit 
                                   amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                                 exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </div>
                            <div className="col-3 mt-3">
                                <center>
                                <img src="https://citynews-torinotoday.stgy.ovh/~media/horizontal-mid/8470590364806/francesco-di-ciommo-authos-ford-2.jpg" width="200px" alt="harry potter" />
                                </center>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer">
                       <div className="row">
                        <div className="col-4 text-primary"><strong  >SHAIK MAHABOOB BASHA</strong><br>
                        </br>
                        <strong>ANIL RAPAKA</strong></div>
                        <div className="col-4"><strong className="text-primary">CONTACT US</strong>
                        <div><HiHome/> Basha,Hyd</div>
                        <div><MdAddCall/> +91 9966310876</div>
                        <p><TfiEmail/> basha123@gmail.com</p>
                        </div>
                        <div className="col-4"></div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default About;