import React from 'react';
import { useState, useRef } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import PopUpDialog from './PopUpDialog'
import './Ex1.css';

function Ex1() {
  const [mssv, setMSSV] = useState('')
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])
  const [popUp, setPopUp] = useState(false)
  
  const mssvRef = useRef()
  const nameRef = useRef()
  const birthRef = useRef()
  const emailRef = useRef()

  const handleAdd = () => {
    const addData = {
      mssv: mssv,
      name: name,
      birth: birth,
      email: email
    }

    if(addData.mssv || addData.name || addData.birth || addData.email === '') {
      setPopUp(true)
    }

    if(addData.mssv && addData.name && addData.birth && addData.email !== '') {
      setPopUp(false)
      setData([...data, addData])
      setMSSV('')
      setName('')
      setBirth('')
      setEmail('')
      mssvRef.current.focus()
    }
  }

  const handleDelete = (index) => {
    const deleteData = data.filter((dataElement, dataIndex) => (
      dataIndex !== index
      ))
      setData(deleteData)
      mssvRef.current.focus()
  }

  return (
    <>
    <h2 className = 'ex1Title'>Bài 1: Thao tác với Data Table</h2>
    <div className = 'inputContainer'>
    <input className = 'input'
           value = {mssv}
           placeholder = 'MSSV'
           onChange = {(e) => setMSSV(e.target.value)}
           ref = {mssvRef}
           onKeyUp = {(e) => {
             if(e.which  === 39)
               nameRef.current.focus()
           }}
           ></input>
    <input className = 'input'
           value = {name}
           placeholder = 'Họ và tên'
           onChange = {(e) => setName(e.target.value)}
           ref = {nameRef}
           onKeyUp = {(e) => {
            if(e.which === 37)
              mssvRef.current.focus()
            if(e.which === 39)
              birthRef.current.focus()
          }}
          ></input>
    <br/>
    <input className = 'input'
           value = {birth}
           placeholder = 'Ngày sinh'
           onChange = {(e) => setBirth(e.target.value)}
           ref = {birthRef}
           onKeyUp = {(e) => {
            if(e.which === 37)
              nameRef.current.focus()
            if(e.which === 39)
              emailRef.current.focus()
          }}
          ></input>
    <input className = 'input'
           value = {email}
           placeholder = 'Email'
           onChange = {(e) => setEmail(e.target.value)}
           ref = {emailRef}
           onKeyUp = {(e) => {
            if(e.which === 37)
              birthRef.current.focus()
           }}
           ></input>
    <br/>
    <button className = 'addButton' 
            onClick = {handleAdd}  
            variant="contained"
            >Thêm</button>
    </div>
    <Table style = {{width: '90%'}}>
      <TableHead>
        <TableRow>
          <TableCell className = 'number'>STT</TableCell>
          <TableCell className = 'mssv'>MSSV</TableCell>
          <TableCell className = 'name'>Họ và tên</TableCell>
          <TableCell className = 'birthday'>Ngày sinh</TableCell>
          <TableCell className = 'email'>Email</TableCell>
          <TableCell className = 'deleteButton'></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((dataElement, index) => (
          <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{dataElement.mssv}</TableCell>
            <TableCell>{dataElement.name}</TableCell>
            <TableCell>{dataElement.birth}</TableCell>
            <TableCell>{dataElement.email}</TableCell>
            <TableCell className = 'cellButton'>
              <button 
              className = 'tableDeleteButton' 
              onClick = {() => handleDelete(index)}
              >Xóa</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <PopUpDialog
    popUp = {popUp}
    setPopUp = {setPopUp}
    ></PopUpDialog>
    </>
  )
}

export default Ex1 