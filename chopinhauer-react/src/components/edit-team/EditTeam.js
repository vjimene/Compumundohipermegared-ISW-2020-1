import React, {  useState,useEffect  } from 'react';
import { Modal,
  ModalBody,
  ModalHeader,Form,FormGroup,FormInput,Button } from "shards-react";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import SearchTableList from "../add-new-team/SearchPServiceForTeam";

const EditTeam = ({post,open,thisToggle, onSubmit}) => {
  const [tag,setTag] = useState(post.tag);
  const [idlist, setIdlist] = useState('');
  const [setedTag,setSetedTag] = useState('');
  //const [setedIdlist, setSetedIdlist] = useState(post.idlist);

  useEffect(() => {    // Actualiza el título del documento usando la API del navegador
    console.log({text:"useEffect editeam",post:post});
    //setId(post.id);
    //setTag(post.tag);
    //setIdlist(post.idlist);
    setTag(setedTag)
  });

  function handleTeamSubmit(data) {
    console.log(data)
    if(data === "") {
    } else {
      setIdlist(data);
      //setSetedIdlist(data);
    }

    };


    return(
    <Modal open={open} toggle={thisToggle} >
      <ModalHeader>{post.tag}</ModalHeader>
      <ModalBody >
      <Form className="add-new-post">
        {/*
        <FormGroup>
          <label>Nombre</label>
          <FormInput
            value={tag}
            onChange={(event) => { setSetedTag(event.target.value)}}
            size="lg"
            className="mb-3" />
        </FormGroup>
        */}
        <SearchTableList onSubmit={handleTeamSubmit} />
      </Form>
      <Button
        theme="primary"
        className="mb-2 mr-1"
        onClick={(event) => {onSubmit({
          'id': post.id,
          'tag': setedTag === "" ? tag :  setedTag,
          'idlist': idlist,
        });
        console.log({tagNew: setedTag, idlistNew: idlist});
      }}
        >
          Editar
        </Button>
      </ModalBody>
    </Modal>
  );
  }



export default EditTeam;
