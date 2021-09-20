import {useState,useContext} from "react";

import {FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon} from "reactstrap";

import { v4 } from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types";

const TodoForm = () =>{
    const [todoString,setTdoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e =>{
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter a todo");
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type : ADD_TODO,
            payload :todo
        });
        setTdoString("");
    };
    return (
        <Form onSubmit= {handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type= "text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value ={todoString}
                    onChange = {e => setTdoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color = "warning">
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>


    )
}

export default TodoForm;