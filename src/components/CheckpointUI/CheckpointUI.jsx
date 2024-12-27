import "./index.css";

function CheckpointUI({ checkpointList, deleteCheckpoint, onSubmit }) {
  return (
    <div className="card checkpoint-card">
      <h2>Checkpoints</h2>
      <p>
        Add Checkpoints in the Left Section and delete by clicking on them here
        !!
      </p>

      <ul>
        {checkpointList.map((checkpoint, index) => (
          <li onClick={() => deleteCheckpoint(index)}>
            {checkpoint.description}
          </li>
        ))}
      </ul>

      <button className="button-reverse" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CheckpointUI;
