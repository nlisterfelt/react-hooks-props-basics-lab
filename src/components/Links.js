import React from "react"
import user from "../data/user"

function Links(){
    return (
    <div>
      <h3>Links</h3>
      <a href={user.links.github} textcontent={user.links.github}>{user.links.github}</a>
      <a href={user.links.linkedin} textcontent={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
  )}

export default Links