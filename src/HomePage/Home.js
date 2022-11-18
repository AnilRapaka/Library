import React from "react";
import HomeNavBar from "../HomePageNav/HomeNavBar";
const Home = () => {
  return (
    <>
      <HomeNavBar />

      <div className="bg-light">
              
      <div className="">
        <strong className="fs-4 m-3">Recently Add Books</strong>
        <div className="row m-3 ">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card bg-danger">
              <div className="card-body">
                <div className="row ">
                  <div className="col-4">
                    <img src="https://m.media-amazon.com/images/I/710ESoXqVPL.jpg" width="100px" alt="harry potter" />
                  </div>
                  <div className="col-8">
                    <center>
                      <strong>HARRY POTTER</strong>
                    </center>

                    <center>and the</center>
                    <center><strong>SCRCERSES'S STONE</strong></center>
                    <br></br>
                    <center><small>Author: <strong>J.K Rowling</strong></small></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card bg-warning">
              <div className="card-body">
                <div className="row ">
                  <div className="col-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp00UR3IxgFKJw_Nb8F_LQg0AEPLvlZq68pg&usqp=CAU" width="104px" alt="harry potter" />
                  </div>
                  <div className="col-8">
                    <center>
                      <strong>HARRY POTTER</strong>
                    </center>

                    <center>and the</center>
                    <center><strong>CURSED CHILD</strong></center>
                    <br></br>
                    <center><small>Author: <strong>J.K Rowling</strong></small></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card bg-primary">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src="https://kbimages1-a.akamaihd.net/44a02495-762a-4453-a067-68364952e531/353/569/90/False/the-hogwarts-library-collection-1.jpg" width="100px" alt="harry potter" />


                  </div>
                  <div className="col-8">
                    <center>
                      <strong>HARRY POTTER</strong>
                    </center>


                    <center><strong>THE HONWARTS LIBRARY COLLECTION</strong></center>
                    <br></br>
                    <center><small>Author: <strong>J.K Rowling</strong></small></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="row">
              <div className="card bg-info">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <img src="https://m.media-amazon.com/images/I/51StPSSsneL.jpg" width="100px" alt="harry potter" />

                    </div>
                    <div className="col-8">
                      <center>
                        <strong>HARRY POTTER</strong>
                      </center>

                      <center>and the</center>
                      <center><strong>PEISONER OF AZKBAN</strong></center>
                      <br></br>
                      <center><small>Author: <strong>J.K Rowling</strong></small></center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* Browse Books */}
<div className=" "> 
<strong className="fs-4  m-3">Browse Books</strong>
  <div className="row">
    <div className="col-9 ">
      <div className="">
        <div className="row m-1  ">
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-success">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://b9r8e6p9.stackpathcdn.com/app/uploads/2019/12/Normal-People.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
             <center>
              <small><strong>Normal People</strong></small>
             </center>
             <br/>
             <center>
             <p>Author</p>
              <small><strong>Sally Rooney</strong></small>
             </center>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-info" >
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://img.theculturetrip.com/wp-content/uploads/2017/08/9780330458535.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>The Place of Illusion</strong></small>
             </center>
            
             <center>
             <p>Author</p>
              <small><strong>Divakaruni</strong></small>
             </center>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-danger">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://img.theculturetrip.com/wp-content/uploads/2017/08/great-indian-novel-shashi-tharoor-viking-press.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>The Great Indian Novel</strong></small>
             </center>
             
             <center>
             <p>Author</p>
              <small><strong>Shashi Tharoon</strong></small>
             </center>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-warning">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://d5i0fhmkm8zzl.cloudfront.net/book/book_uncle_front_001.jpg" width="71px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>Book Uncle And Me</strong></small>
             </center>
             <center>
             <p>Author</p>
              <small><strong>Krishnaswani</strong></small>
             </center>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className="row m-1 ">
        <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-danger">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://m.media-amazon.com/images/I/710ESoXqVPL.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>Book Uncle And Me</strong></small>
             </center>
             <center>
             <p>Author</p>
              <small><strong>Krishnaswani</strong></small>
             </center>
             </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-light">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://m.media-amazon.com/images/I/710ESoXqVPL.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>Normal People</strong></small>
             </center>
             <br/>
             <center>
             <p>Author</p>
              <small><strong>Sally Rooney</strong></small>
             </center>
             </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-success">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://m.media-amazon.com/images/I/710ESoXqVPL.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>Normal People</strong></small>
             </center>
             <br/>
             <center>
             <p>Author</p>
              <small><strong>Sally Rooney</strong></small>
             </center>
             </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
           <div className="card bg-primary">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                <img src="https://harpercollins.co.in/book-cover/PowerPoint_jpg/9789390351473.jpg" width="70px" alt="harry potter" />

                </div>
                <div className="col-8">
                <center>
              <small><strong>Normal People</strong></small>
             </center>
             <br/>
             <center>
             <p>Author</p>
              <small><strong>Sally Rooney</strong></small>
             </center>
             </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    {/* Last images*/}
    <div className="col-3">
    </div>
    </div>
</div>
</div>
     
    </>
  )
}
export default Home;