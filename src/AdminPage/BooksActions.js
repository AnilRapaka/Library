import React from "react";
import AdminNavBar from "../HomePageNav/AdminNavbar";
import { useState } from "react";
import { useEffect} from "react";
//import image from '../assets/Images';
import axios from "axios";
//import Table from 'react-bootstrap/Table';
const BooksActions=()=>{
    const[allData,setAllData]=useState([]);
    const [model,setModel]=useState(false);
    useEffect(()=>{
        getBooks();
    },[])
    const Delete=(id)=>{
        
        axios.delete(`http://localhost:2520/deleteBook/${id}`).then(()=>{
            getBooks();
        },(err)=>{
            console.log(err);
        })
    }

    const getBooks = ()=>{
        axios.get(`http://localhost:2520/getAllBooksDetails`).then((res)=>{
            const{data}=res;
            
            setAllData(data);
            console.log(data);
        },(err)=>console.log(err))
    }
    const Update=(e)=>{
       
    }
    return(
        <>
        <AdminNavBar/>
        <center>
            <table  cellPadding={15}  >
                <tr>
                    <th>SNO</th>
                    <th className="nowrap">Book Name</th>
                    <th className="nowrap">Author Name</th>
                    <th >Image</th>
                    <th colSpan={2} className="text-center">Actions</th>
                </tr>
                {allData.map((ele,index)=>{
                    return(
                        <><tr>
                            <td>{index + 1}</td>
                            <td>{ele.bookName}</td>
                            <td>{ele.author}</td>
                            <td> <img src={require(`../assets/Images/${ele.image}`)} width="150" height="150" /></td>
                            
                            <td><button className="btn-danger btn-sm" onClick={()=>Delete(ele.id)}>Delete</button></td>
                            <td><button className="btn-primary" onClick={()=>Update(ele.id)}>Update</button></td>
                        </tr>
                        </>
                    )
                })}
            </table>
            </center>
        </>
    )
}
export default BooksActions;