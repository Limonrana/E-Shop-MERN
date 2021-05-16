// import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Label } from 'reactstrap';

const CustomEditor = ({ editorState, onEditorStateChange }) => (
    <div className="Editor">
        <Label className="input-label">
            Description <span className="input-label-secondary">(Optional)</span>
        </Label>

        <Editor
            editorState={editorState}
            wrapperClassName="eshop-wrapper"
            editorClassName="eshop-editor"
            toolbarClassName="eshop-toolbar"
            onEditorStateChange={onEditorStateChange}
        />
    </div>
);

export default CustomEditor;
