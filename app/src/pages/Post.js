import React, {useState, useEffect} from "react";
import ExpandableCard from "@leafygreen-ui/expandable-card";
import { H2, H3, Body } from "@leafygreen-ui/typography";
import ConfirmationModal from "@leafygreen-ui/confirmation-modal";
import TextInput from '@leafygreen-ui/text-input';
import TextArea from "@leafygreen-ui/text-area";
import Icon from "@leafygreen-ui/icon";
import Button from "@leafygreen-ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

export default function App() {
  let params = useParams();
  let [post, setPost] = useState({});
  let [showModal, setShowModal] = useState(false);
  let [author, setAuthor] = useState("");
  let [body, setBody] = useState("");
  const navigate = useNavigate();

  const deletePost = async () => {
    await fetch(`${baseUrl}/posts/${params.id}`, {
      method: "DELETE"
    });
    return navigate("/");
  }

  const handleNewComment = async () => {
    await fetch(`${baseUrl}/posts/comment/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        author, body
      })
    });

    let result = await fetch(`${baseUrl}/posts/${params.id}`).then(resp => resp.json());
    setPost(result);

    setAuthor("");
    setBody("");
    setShowModal(false);
  }

  useEffect(() => {
    const loadPost = async () => {
      let results = await fetch(`${baseUrl}/posts/${params.id}`).then(resp => resp.json());
      setPost(results);
    }

    loadPost();
  }, []);

  return (
    <React.Fragment>
      <H2>{post.title}</H2>
      <H3>by {post.author}</H3>
      <p>Published on {(new Date(post.date)).toLocaleDateString()}</p>
      <p dangerouslySetInnerHTML={{__html: post.body}} />
      <Button variant="primary" leftGlyph={<Icon glyph="Megaphone" />} onClick={() => setShowModal(true)}>Add Comment</Button>&nbsp;&nbsp;
      <Button variant="danger" leftGlyph={<Icon glyph="Trash" />} onClick={deletePost}>Delete Post</Button>
      <br/><br/>
      {post && post.comments &&
      <ExpandableCard title="Comments">
        {post.comments.map(comment => {
          return (
            <p>
              <Body weight="medium">{comment.author} said: </Body>
              <Body>{comment.body}</Body>
            </p>
          )
        })}
      </ExpandableCard>
      }

      <ConfirmationModal
        open={showModal}
        buttonText="Save Comment"
        onConfirm={handleNewComment}
        onCancel={() => setShowModal(false)}
      >
        <H2>Add Comment</H2>
        <TextInput
            label="Name"
            description="Enter your name"
            onChange={e => setAuthor(e.target.value)}
            value={author}
          />
          <TextArea
            label="Comment"
            onChange={e => setBody(e.target.value)}
            rows="5"
            value={body}
          />
      </ConfirmationModal>
    </React.Fragment>
  )
}