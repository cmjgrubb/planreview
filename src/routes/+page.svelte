<script>
    let approval_status = "";
    let date = new Date();
    date.setDate(date.getDate() + 21);
    let formatted_date = date.toLocaleDateString();
  </script>

<div style="display: flex; justify-content: space-between;">
    <div style="flex: 1; margin-right: 10px;">
      <p>PO Box 1877, Winchester, VA 22604-8377</p>
      <p>315 Tasker Road, Stephens City, VA 22655</p>
    </div>
    <div style="flex: 1; margin-left: 10px;">
      <p>540.868.1061 voice</p>
      <p>540.868.1429 fax</p>
    </div>
  </div>

  <form>
    <div>
    <label for="project">Project</label>
    <input type="text" id="project" name="project" placeholder="Project Name" required />

    <label for="Applicant">Applicant</label>
    <input type="text" id="Applicant" name="Applicant" placeholder="Applicant Name" required />
</div>

    <label for="Attention">Attention</label>
    <input type="text" id="Attention" name="Attention" placeholder="Attention" />

    <h2>Review Status</h2>

    <label for="Review_Number">Review Number</label>
    <input type="text" id="Review_Number" name="Review_Number" required />

    <div>
    <label>
        <input type="radio" bind:group={approval_status} value="correct">
        Correct & Resubmit
      </label>
    
      <label>
        <input type="radio" bind:group={approval_status} value="noted">
        Approved as Noted
      </label>
    
      <label>
        <input type="radio" bind:group={approval_status} value="approved">
        Approved
      </label>
    </div>

    <h2>Drawings</h2>
    <label for="Deadline">Not later than</label>
    <input type="text" id="Deadline" name="Deadline" placeholder={formatted_date} />
  </form>

  <style>
    :global(body) {
      font-family: Arial, sans-serif;
      margin: 2rem;
      padding: 1rem;
    }
  </style>