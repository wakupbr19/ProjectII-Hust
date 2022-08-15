import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";

function PopUpDialog(props) {
    return (
    <Dialog open = {props.popUp}>
        <div className = 'popUp'>

        <DialogTitle><h1 className = 'dialogTitle'>Thông báo</h1></DialogTitle>
        <DialogContent>Xin hãy vui lòng nhập đầy đủ thông tin!</DialogContent>
        <br/>
        <button className = 'popUpButton' onClick = {() => {props.setPopUp(false)}}>Cancel</button> 

        </div>
    </Dialog>
    )
}

export default PopUpDialog;