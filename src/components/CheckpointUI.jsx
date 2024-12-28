function CheckpointUI({ checkpointList, deleteCheckpoint, onSubmit }) {
  return (
    <div className="card secondary-card">
      <h2>Checkpoints</h2>
      <p>
        Add Checkpoints in the Left Section and delete by clicking on them here
        !!
      </p>

      <ul>
        {checkpointList.map((checkpoint, index) => (
          <li key={index} onClick={() => deleteCheckpoint(index)}>
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