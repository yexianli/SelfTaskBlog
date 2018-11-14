import React, { Component } from 'react';
<<<<<<< HEAD
import './WriteBlog.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// var url  = require('./HeadTopPwd.png')

class WriteBlog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}

	}

	componentDidMount() {

	}


	render() {
		return (
			<div>
				<div>写博客的组件</div>
			</div>
		);
	}
}
;
=======
import 'draft-js/dist/Draft.css';
import './WriteBlog.css'
import {Editor, EditorState, RichUtils} from 'draft-js';

// var url  = require('./WriteBlogPwd.png')


class WriteBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = editorState => {
            console.log(this.state.editorState)
            this.setState({editorState});
        };
        this.toggleBlockType = this.toggleBlockType.bind(this);
    }
    toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }
    render() {
        return (
            <div className="basic">
                块级样式
                <BlockStyleControls
                    editorState={this.state.editorState}
                    onToggle={this.toggleBlockType}
                />
                <div className="editor">
                    <Editor
                        blockStyleFn={getBlockStyle}
                        editorState={this.state.editorState}
                        onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }
        return (
            <span className={className} onMouseDown={this.onToggle}>
             {this.props.label}
            </span>
        );
    }
}
>>>>>>> 4d81f796cb07ad44f181bfbc51eb195631cafb49
export default WriteBlog;
