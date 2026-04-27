
import styles from "./Post.module.css"
import { useState } from "react";

function Post({name, Content="no content provided"})
{
    
    const [postContent, setPostContent] = useState(Content);
  
    const [editableContent, setEditableContent] = useState(Content);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleContentChange = (event) => {
        setEditableContent(event.target.value);
    };
    
    
    const handleEditClick = () => { setIsEditing(true);}
    const handleSaveClick = () => { setPostContent(editableContent); setIsEditing(false);}  
    const handleCancelClick = () => { setIsEditing(false);setEditableContent(postContent);}

    
      return(
        <div className={styles.container}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.content}>{postContent}</p>

            {!isEditing && (
                   
               <button className={styles.button} onClick={handleEditClick}>Edit</button>
            )}


            {isEditing &&<div className={styles.editSection}>
                <input type="text"
                  onChange={handleContentChange}
                  className={styles.input} placeholder="Edit post content...   " 
                  value={editableContent}
                  autoFocus
                />
    
              <div className={styles.buttonGroup}>
               <button className={styles.button + " " + styles.saveButton} onClick={handleSaveClick}>
                    Save
                </button>
                <button className={styles.button + " " + styles.cancelButton} onClick={handleCancelClick}>
                    Cancel
                </button>
              </div>
          </div>}
        </div>
    );
}
export default Post;