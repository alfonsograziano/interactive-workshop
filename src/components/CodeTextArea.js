import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";
import { javascript } from "@codemirror/lang-javascript";

const host = "http://localhost:5000";

const verifySolution = (exerciseId, solution) =>
  axios.post(`${host}/verify/${exerciseId}`, { solution });
const getExercise = (exerciseId) => axios.get(`${host}/exercise/${exerciseId}`);

const getSolution = (exerciseId) => axios.get(`${host}/solution/${exerciseId}`);

function CodeTextArea({ exerciseId }) {
  const [code, setCode] = useState(undefined);
  const [result, setResult] = useState(undefined);

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
        onChange={setCode}
      />
      {result && result.error === null && (
        <h3>🎉 Congratulations! Your answer is correct 🎉</h3>
      )}
      {result && result.error && result.error.code === 1 && (
        <>
          <h3>Unfortunately your unswer is wrong, here's why</h3>
          <CodeMirror value={result.stdout} height="200px" theme="light" />
        </>
      )}

      <br />
      <button
        style={{ width: "100%", marginBottom: "10px" }}
        onClick={() => {
          verifySolution(exerciseId, code).then((res) =>
            setResult(res.data.result)
          );
        }}
      >
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
