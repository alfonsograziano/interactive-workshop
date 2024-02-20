import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";
import { javascript } from "@codemirror/lang-javascript";

const host = "http://localhost:5000";

const verifySolution = (exerciseId, solution) =>
  axios.post(`${host}/exercise/${exerciseId}`, { solution });
const getExercise = (exerciseId) => axios.get(`${host}/exercise/${exerciseId}`);

const getSolution = (exerciseId) => axios.get(`${host}/solution/${exerciseId}`);

function CodeTextArea({ exerciseId }) {
  const [code, setCode] = useState(undefined);

  useEffect(() => {
    getExercise(exerciseId).then((res) => setCode(res.data.content));
  }, [exerciseId]);

  if (!code) return <p>Loading code...</p>;

  return (
    <>
      <CodeMirror
        value={code}
        height="400px"
        lang="javasript"
        extensions={[javascript()]}
        theme="light"
        editable
        syntaxHighlighting
        onChange={setCode}
      />
      <br />
      <button style={{ width: "100%", marginBottom: "10px" }}>
        Verify my solution
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button style={{ width: "100%" }}>Provide an hint</button>
        <button
          style={{ width: "100%" }}
          onClick={() => {
            getSolution(exerciseId).then((res) => setCode(res.data.content));
          }}
        >
          Give me the solution
        </button>
      </div>
    </>
  );
}
export default CodeTextArea;
