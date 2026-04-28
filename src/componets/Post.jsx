
import styles from "./Post.module.css"
import { useState } from "react";

function Post({name, content="no content provided",onEdit})
{
    
    
    const [editableContent, setEditableContent] = useState(content);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleContentChange = (event) => {
        setEditableContent(event.target.value);
    };
    
    
    const handleEditClick = () => { setIsEditing(true);}

    const handleSaveClick = () => { onEdit(editableContent); setIsEditing(false);}  
    
    const handleCancelClick = () => { setIsEditing(false);setEditableContent(content);}

    const editButton= (<button className={styles.button} onClick={handleEditClick}>Edit</button>)
    
      return(
        <div className={styles.container}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.content}>{editableContent}</p>

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