import React, {Component} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

 const SecaoComentario = ()=> {
	
	const  [inputValue] = ("")

	const onChangeComentario = (event) => {
		this.setState({inputValue: event.target.value})
	}


		return <CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<button onClick={(event) => {this.props.enviarComentario(this.state.inputValue)}}>Enviar</button>
		</CommentContainer>
	
}


export default SecaoComentario