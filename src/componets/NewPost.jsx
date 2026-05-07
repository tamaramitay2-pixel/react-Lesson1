import { useState } from "react";

import styles from "./NewPost.module.css"

function NewPost ({closeDialog , onAdd}) { 
  const [authorName, setAuthorName] = useState("");
  const [postContent, setPostContent] = useState("");
 
  const handleSubmit = () => {
    event.preventDefault();
    if (authorName && postContent) {
      onAdd(authorName, postContent);
      setAuthorName("");
      setPostContent("");
      closeDialog();
    }
  };

  return (
    <form className={styles["modal-overlay"]} onsubmit={handleSubmit}>
      <div className={styles["modal-card"]}>
        <h2 className={styles["modal-title"]}>Add New Post</h2>
        
        {/* שדה שם המחבר */}
        <div className={styles["form-group"]}>
          <label className={styles["input-label"]}>Author Name:</label>
          <input 
            type="text" 
            className={styles["form-input"]}                 
            placeholder="Enter author name" 
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        {/* שדה תוכן הפוסט */}
        <div className={styles["form-group"]}>
          <label className={styles["input-label"]}>Post Content:</label>
          <textarea 
            className={styles["form-textarea"]}      
            placeholder="Enter post content"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>

        {/* כפתורי הפעולה */}
        <div className={styles["button-group"]}>
          <button className={styles["btn"]} className={styles["btn-create"]} onClick={handleSubmit} >Create Post</button>
          <button className={styles["btn"]} className={styles["btn-cancel"]}  onClick={closeDialog}  >Cancel</button>
        </div>
      </div>
    </form>
  );
};
export default NewPost