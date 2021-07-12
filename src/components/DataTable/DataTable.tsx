import React, {useState} from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData} from '../../custom-hooks'
import { server_calls } from '../../api';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import {Form} from '../../components/Form'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 190 },
  { field: 'special_power', headerName: 'special power', width: 190 },
  { field: 'home_planet', headerName: 'home_planet', width: 190 },
  { field: 'nemesis', headerName: 'nemesis', width: 190 },
  { field: 'weakness', headerName: 'weakness', width: 190 },
];

interface gridData{
  data:{
    id?:string
  }
}

export const DataTable = () => {

  let { droneData, getData } = useGetData();
  let [open, setOpen] = useState(false)
  let [gridData, setData] = useState<gridData>({data:{}})
  
  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2></h2>
      <DataGrid rows={droneData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />
      <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <DialogContentText></DialogContentText>
                <Form id={gridData.data.id!}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
    
    </div>
  );
}